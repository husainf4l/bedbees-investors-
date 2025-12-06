import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, investmentAmount, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Send an email using a service like SendGrid, AWS SES, or Resend
    // 2. Save to a database
    // 3. Send to a CRM like HubSpot or Salesforce
    // 4. Notify the team via Slack/Discord

    // Mock implementation - log the contact
    console.log("New investor contact:", {
      name,
      email,
      phone,
      investmentAmount,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
