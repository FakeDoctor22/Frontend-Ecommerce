//import React from "react";
import logo from "../assets/logo8.png";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwCFw4aLxm3l7igCBfUNOPGn78LxbhwFghEK2UiB4eTpFwNkOQm92nYE-lpdv5y3C2p/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const msg = form.querySelector("#msg");

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(() => {
        if (msg) {
          msg.innerHTML = "Message Sent";
          setTimeout(function () {
            msg.innerHTML = "";
          }, 3000);
        }
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div id="contact" className="bg-gray-100">
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h1 className="sub-title text-3xl mb-4 font-bold">Contact us :</h1>
            <div>
              <img src={logo} className="h-full mr-5" />
              <p className="font-bold">
                <i className="fas fa-paper-plane"></i>
                Pawfectchewdelivery@gmail.com
              </p>
            </div>
            <div className="social-icon mt-4">
              <a href="https://web.facebook.com/boboloko123" className="mr-2">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                className="mr-2"
              >
                <i className="">
                  <i className="fa-regular fa-envelope"></i>
                </i>
              </a>
              <a
                href="https://www.linkedin.com/in/webster-bisoles-b40563266/"
                className="mr-2"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/wbisoles1214" className="mr-2">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <form
              name="submit-to-google-sheet"
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="Message"
                  id="message"
                  rows="6"
                  placeholder="Your Message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
