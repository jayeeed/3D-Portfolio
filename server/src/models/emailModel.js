const nodemailer = require("nodemailer");

async function sendThankYouEmail(toEmail, formattedThankYouHtml) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const thankYouMailOptions = {
    from: process.env.GMAIL_USER,
    to: toEmail,
    subject: "Thank You for Reaching Out!!",
    html: formattedThankYouHtml,
  };

  try {
    await transporter.sendMail(thankYouMailOptions);
    console.log("Thank-you email sent to:", toEmail);
  } catch (error) {
    console.error("Error sending thank-you email:", error);
  }
}

module.exports = { sendThankYouEmail };
