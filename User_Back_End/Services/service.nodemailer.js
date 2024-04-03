import nodeMailer from "nodemailer";

export const sendOtp = (email, otp) => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "kodaiflavours@gmail.com",
      pass: process.env.NODEMAILER_EMAIL_PASSWORD,
    },
  });

  const info = {
    from: "kodaiflavours@gmail.com",
    to: email,
    subject: "Sign-up Kodai Flavours",
    text: `Hi, ${email}! Your one time password is ${otp} and it expires in a minute. Signup soon!`,
  };
  transporter.sendMail(info, (error) => {
    if (error) {
      console.log("error", error);
    } else {
      console.log("Otp sent successfully.");
    }
  });
};
