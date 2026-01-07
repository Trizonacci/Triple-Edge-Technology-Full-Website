import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, phone, description } = data;

    // Validate required fields
    if (!email || !phone || !description) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        email,
        phone,
        description,
      },
    });

    // Create HTML email body
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0E3F8A 0%, #1F6FD6 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
        </div>
        
        <div style="background: #F2F4F7; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #111111; margin-top: 0; margin-bottom: 20px; font-size: 22px;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <p style="margin: 0; color: #3A3A3A; font-weight: bold; font-size: 14px;">Email:</p>
              <p style="margin: 5px 0 0 0; color: #1F6FD6; font-size: 16px;">
                <a href="mailto:${email}" style="color: #1F6FD6; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="margin: 0; color: #3A3A3A; font-weight: bold; font-size: 14px;">Phone:</p>
              <p style="margin: 5px 0 0 0; color: #111111; font-size: 16px;">
                <a href="tel:${phone}" style="color: #111111; text-decoration: none;">${phone}</a>
              </p>
            </div>
          </div>
          
          <div style="background: white; padding: 25px; border-radius: 8px;">
            <h2 style="color: #111111; margin-top: 0; margin-bottom: 15px; font-size: 22px;">Message</h2>
            <div style="background: #F2F4F7; padding: 20px; border-radius: 6px; border-left: 4px solid #1F6FD6;">
              <p style="margin: 0; color: #3A3A3A; line-height: 1.6; white-space: pre-wrap;">${description}</p>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #3A3A3A; font-size: 12px;">
              Submitted on ${new Date().toLocaleString('en-GB', { 
                dateStyle: 'full', 
                timeStyle: 'short',
                timeZone: 'Europe/Brussels'
              })}
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding: 20px;">
          <p style="color: #3A3A3A; font-size: 12px; margin: 0;">
            This email was sent from the Triple Edge Technology contact form
          </p>
        </div>
      </div>
    `;

    // Send notification email
    const appUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const appName = 'Triple Edge Technology';

    const emailResponse = await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        deployment_token: process.env.ABACUSAI_API_KEY,
        subject: `New Contact Form Submission - Triple Edge Technology`,
        body: htmlBody,
        is_html: true,
        recipient_email: 'tristan@tripleedgetechnology.com',
        sender_email: `noreply@${new URL(appUrl).hostname}`,
        sender_alias: appName,
      }),
    });

    const emailResult = await emailResponse.json();
    
    if (!emailResult?.success) {
      console.error('Failed to send email notification:', emailResult);
      // Continue anyway - form is saved to database
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      submissionId: submission?.id,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
