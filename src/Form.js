import React from "react";
/*
const initialState = { name: "", email: "", message: "" };
const mapNameToAction = {
  name: "SET_NAME",
  email: "SET_EMAIL",
  message: "SET_MESSAGE",
};
function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.name };
    case "SET_EMAIL":
      return { ...state, email: action.email };
    case "SET_MESSAGE":
      return { ...state, message: action.message };
    default:
      return state;
  }
}
*/
export default function Form() {
  /*
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  function changeHandle(event) {
    const { name, value } = event.target;
    dispatch({ type: mapNameToAction[name], [name]: value });
  }

  function submitHandle(event) {
    event.preventDefault();
    fetch("/.netlify/functions/test", { method: "POST", body: state })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  */

  return (
    <form name="contact-form" method="post">
      <input type="hidden" name="form-name" value="contact-form" />
      <div>
        <label htmlFor="name">Full Name</label> <br />
        <input type="text" id="name" name="name" placeholder="Jane Doe" required />
      </div>
      <div>
        <label htmlFor="email">E-mail</label> <br />
        <input type="email" id="email" name="email" placeholder="doe@example.com" required />
      </div>
      <div>
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" name="message" placeholder="Hi there!" required></textarea>
      </div>
      <div>
        <input type="submit" className="submit" value="Send Message" />
      </div>
    </form>
  );
}
