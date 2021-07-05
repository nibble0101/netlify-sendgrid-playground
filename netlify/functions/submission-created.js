exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, message: "Method Not Allowed" };
  }
  try {
    const { payload } = JSON.parse(event.body);
    const { name, email, message } = payload.data;
    // Send email from here
    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`message: ${message}`);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello world" }),
    };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, message: err.toString() };
  }
};
