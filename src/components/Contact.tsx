import { useState } from "react";
import emailjs from "emailjs-com";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      const templateParams = {
        username,
        phoneNumber,
        email,
        subject,
        message,
      };

      emailjs
        .send(
          "service_di9qqse", // Replace with your EmailJS service ID
          "template_tkn8i5m", // Replace with your EmailJS template ID
          templateParams,
          "3ahI6yNUw6KRdJJDL" // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSuccessMsg(
              `Thank you ${username}, Your message has been sent successfully!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error);
            setErrMsg("Failed to send your message, please try again.");
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-gray-700 flex justify-center items-center"
    >
      <FadeIn>
        <div className="text-center">
          <Title title="CONTACT US" des="Reach Us Out" />
        </div>
        <div className="w-full max-w-3xl">
          <div className="w-full h-auto flex flex-col justify-center items-center">
            <div className="w-full h-full py-10 bg-gradient-to-r from-[#0B1120] to-[#0B1120] flex flex-col gap-8 p-4 rounded-lg shadow-shadowOne">
              <form
                className="w-full flex flex-col gap-4"
                onSubmit={handleSend}
              >
                {errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}
                <div className="w-full flex flex-col gap-4">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="w-full flex flex-col gap-4">
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="w-full flex flex-col gap-4">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={`${
                      errMsg === "Please give your Email!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="w-full flex flex-col gap-4">
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className={`${
                      errMsg === "Please give your Subject!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div className="w-full flex flex-col gap-4">
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={`${
                      errMsg === "Message is required!" && "outline-designColor"
                    } contactTextArea`}
                    cols={30}
                    rows={8}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-gray-600 border"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
