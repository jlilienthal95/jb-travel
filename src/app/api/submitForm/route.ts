const nodemailer = require("nodemailer");

export async function POST(req: Request){
    try {
    const { formData } = await req.json()
    // console.log('formDataPOST:', formData)

    const transporter = nodemailer.createTransport({
        service: 'gmail', // Or any service you are using
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.RECIPIENT_USERNAME,
        subject: 'New Form Submission!',
        text: JSON.stringify(formData),
    };
        console.log(process.env.EMAIL_USERNAME)
        console.log(process.env.EMAIL_PASSWORD)
        await transporter.sendMail(mailOptions);
        return new Response(
            JSON.stringify({ message: 'Email sent successfully!' }),
            {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            }
          );
    } catch (error) {
        console.error('Error sending email:', error); // Log the full error for debugging
        return new Response(
            JSON.stringify({ message: 'Error sending email:', error }),
            {
              status: 500,
              headers: { 'Content-Type': 'application/json' },
            }
          );
    }
}