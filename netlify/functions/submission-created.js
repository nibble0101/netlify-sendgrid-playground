const sendGridMail = require("@sendgrid/mail");
exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }
  try {
    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
    const { payload } = JSON.parse(event.body);
    const { name, email, message } = payload.data;
    const mail = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "We have received your message",
      text: `Hi ${name}! Thanks for getting in touch. This is to acknowledge receipt of your message`,
      html: `<p>Hi ${name}! <br> Thanks for getting in touch. This is to acknowledge receipt of your message</p>`,
    };
    console.log(message);
    await sendGridMail.send(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, message: err.toString() };
  }
};
