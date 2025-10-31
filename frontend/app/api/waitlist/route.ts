import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email: email.toLowerCase().trim(),
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Email already registered' },
          { status: 409 }
        );
      }
      throw error;
    }

    // TODO: Send welcome email via Resend (optional)
    // const { data: emailData, error: emailError } = await resend.emails.send({
    //   from: 'waitlist@gitify.dev',
    //   to: email,
    //   subject: 'Welcome to gitify.dev waitlist!',
    //   html: '<p>Thanks for joining! We'll notify you when we launch.</p>'
    // });

    console.log('New waitlist signup:', email);

    return NextResponse.json({ 
      success: true,
      message: 'Successfully joined waitlist' 
    });

  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}