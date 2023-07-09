import React from 'react';

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwCFw4aLxm3l7igCBfUNOPGn78LxbhwFghEK2UiB4eTpFwNkOQm92nYE-lpdv5y3C2p/exec";

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const msg = form.querySelector("#msg");
    
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
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
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact us</h1>
            <p>
              <i className="fas fa-paper-plane"></i>pawfectchewdelivery@gmail.com
            </p>
            <div className="social-icon">
              <a href="https://web.facebook.com/boboloko123">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                <i className="">
                  <i className="fa-regular fa-envelope"></i>
                </i>
              </a>
              <a href="https://www.linkedin.com/in/webster-bisoles-b40563266/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/wbisoles1214">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="container"></div>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">
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