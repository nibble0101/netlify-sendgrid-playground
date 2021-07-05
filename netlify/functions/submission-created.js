exports.handler = async function (event, context) {
  const { body } = event;
  console.log(JSON.parse(body));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello world" }),
  };
};
