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
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" required />
      </p>
      <p>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" name="message" required></textarea>
      </p>
      <p>
        <input type="submit" value="Submit message" />
      </p>
    </form>
  );
}
