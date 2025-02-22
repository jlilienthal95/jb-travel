import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { formData } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail', // Or any service you are using
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Format the email text in a more readable way
        const formatEmailText = (data) => {
            return `
              Travel Inquiry from ${data.fName} ${data.lName}

              **Trip Details:**
              - **Destination:** ${data.destination}
              - **Travel Dates:** ${data.travelDateStart} to ${data.travelDateEnd} (${data.isFlexible === "Yes" ? "Flexible" : "Fixed"})
              - **Budget:** $${data.budget} (${data.budgetIsTotal})
              - **Room Type Preference:** ${data.roomTypePref}
              - **Special Requests:** ${data.specialRequests || "None"}
              - **Attractions of Interest:** ${data.attractions || "None"}
              - **Flight Assistance Needed?** ${data.flightAssistance}

              **Contact Information:**
              - **Email:** ${data.email}
              - **Phone:** ${data.phone}
              - **Address:** ${data.address}, ${data.city}, ${data.state} ${data.zip}
              - **Preferred Contact Method:** ${data.prefContact ? "Yes" : "No"}  
                (Email: ${data.prefEmail}, Phone: ${data.prefPhone}, Text: ${data.prefText})

              **Travelers:**
              ${Object.values(data.travelers).map(
                  (traveler, index) => `  - **Traveler ${index + 1}:** ${traveler.fName} ${traveler.lName} (DOB: ${traveler.dateOfBirth})`
              ).join("\n")}

              **Additional Information:**
              ${data.anythingElse || "None"}
              `;
        };

        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: process.env.RECIPIENT_USERNAME,
            subject: 'New Travel Inquiry Submission!',
            text: formatEmailText(formData),
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent:', formatEmailText(formData)); // Log formatted email

        return new Response(
            JSON.stringify({ message: 'Email sent successfully!' }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(
            JSON.stringify({ message: 'Error sending email', error }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}