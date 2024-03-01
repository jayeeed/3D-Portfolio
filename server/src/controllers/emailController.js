const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const { sendThankYouEmail } = require("../models/emailModel");

async function sendEmail(req, res) {
  const { name, email, message } = req.body;

  // Gmail SMTP configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Read the HTML template for the main email
  const emailTemplatePath = path.join(
    __dirname,
    "../../assets/templates/get.html"
  );
  const emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");

  // Replace placeholders in the HTML template with actual values
  const formattedHtml = emailTemplate
    .replace("{{name}}", name)
    .replace("{{name}}", name)
    .replace("{{email}}", email)
    .replace("{{message}}", message)
    .replace("{{message}}", message);

  // Email configuration
  const mailOptions = {
    from: email,
    to: "jayedbinjahangir@gmail.com",
    subject: "Message For You!!",
    html: formattedHtml,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);

    // Log a notification to the terminal
    console.log("Got a new mail from:", "\nName: " + name, "\nEmail: " + email);

    // Read the HTML template for the thank-you email
    const thankYouEmailTemplatePath = path.join(
      __dirname,
      "../../assets/templates/send.html"
    );
    const thankYouEmailTemplate = fs.readFileSync(
      thankYouEmailTemplatePath,
      "utf-8"
    );

    // Replace placeholders in the thank-you email template with actual values
    const formattedThankYouHtml = thankYouEmailTemplate
      .replace("{{name}}", name)
      .replace("{{message}}", message);

    // Send thank-you email
    await sendThankYouEmail(email, formattedThankYouHtml);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
}

module.exports = { sendEmail };
