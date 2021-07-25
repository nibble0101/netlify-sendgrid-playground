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
    const html = `
      <div> 
         Hi ${name}! <br><br>
         Thanks for getting in touch.
         We have received your message
         and one of our customer care
         representatives will get in
         touch shortly
         <br><br>
         Best <br>
         John Doe
      </div>
    `;
    const mail = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "We have received your message",
      html,
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
