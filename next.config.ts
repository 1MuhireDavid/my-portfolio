import type { NextConfig } from "next";
import nodemailer from "nodemailer";
const nextConfig: NextConfig = {};


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 587,
    secure: false,
  auth: {
    user: "muhiredavid74@gmail.com",
    pass: "wavkrcnfqwtkcif",
  },
  tls: {
    rejectUnauthorized: false // Only use in development
  }
});

// async..await is not allowed in global scope, must use a wrapper 
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"David Muhire 👻" <muhiredavid74@gmail.com>', // sender address
    to: "Muhire, muhire221001399@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);

export default nextConfig;
 