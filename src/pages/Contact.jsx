import "../App.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Contact() {
  let navigate = useNavigate();
  const handleClose = () => {
    let path = `/`;
    document.querySelector(".Contact").classList.add("invisible");
    setTimeout(() => {
      navigate(path);
    }, 600);
  };

  const [click, setClick] = useState(false);

  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);

  const generalHandleQuestion = () => {
    setClick(true);
    let answerBots = document.querySelectorAll(".answer-bot");
    answerBots.forEach((bot) => {
      bot.classList.add("hide");
    });
  };

  const handleQuestion1 = () => {
    setQuestion1(true);
    generalHandleQuestion();
  };

  const handleQuestion2 = () => {
    setQuestion2(true);
    generalHandleQuestion();
  };

  const handleQuestion3 = () => {
    setQuestion3(true);
    generalHandleQuestion();
  };

  const handleQuestion4 = () => {
    setQuestion4(true);
    generalHandleQuestion();
  };

  // const handleSearchSubmit = (event) => {
  //   console.log("HI");
  //   event.preventDefault();
  // };

  return (
    <div className="Contact">
      <div className="Contact-Head">
        <div className="Contact-top">
          <h3>Ask me! HMZ BOT 🤖</h3>
          <span onClick={handleClose}>close</span>
        </div>
        <div className="Contact-inner">
          <div className="Contact-Content Greeting">
            <span className="span-bot greeting-bot">Hey!👋🏼 </span>
            <span className="span-bot greeting-bot">
              Hope you're doing great.
            </span>
            <span className="span-bot greeting-bot">
              Choose from below what you'd like to know. 😊😊😊
            </span>
          </div>
          {click && (
            <div className="Contact-Content New-Answers">
              {question1 && (
                <span className="span-bot new-answer-bot">
                  Hey, thank you for visiting my website. Feel free to check out
                  my <Link to="/about">About Page</Link>.
                </span>
              )}
              {question2 && (
                <span className="span-bot new-answer-bot">
                  I'd be glad if you look at my projects on my work page. :)
                  Otherwise you can check out my{" "}
                  <Link to="/creation">Visual Stories</Link>.
                </span>
              )}
              {question3 && (
                <span className="span-bot new-answer-bot">
                  I'm mostly active on Instagram. Here's my{" "}
                  <a
                    target="_blank"
                    href="https://www.instagram.com/haz_pro99/"
                    rel="noreferrer"
                  >
                    Profile
                  </a>
                  . Feel free to check it out ;)
                </span>
              )}
              {question4 && (
                <span className="span-bot new-answer-bot">
                  Wow, that's nice to here. Please send me an{" "}
                  <a href="mailto:hamzahfayad99@gmail.com">Email</a> with all
                  the details.
                </span>
              )}
            </div>
          )}
          <div className="Contact-Content Answers">
            <span
              className="span-bot answer-bot quest1"
              onClick={handleQuestion1}
            >
              Hey, nice to meet you. 🤝
            </span>
            <span
              className="span-bot answer-bot quest2"
              onClick={handleQuestion2}
            >
              Show me your work 💻
            </span>
            <span
              className="span-bot answer-bot quest3"
              onClick={handleQuestion3}
            >
              See your Social Media 📱
            </span>
            <span
              className="span-bot answer-bot quest4"
              onClick={handleQuestion4}
            >
              I'd like to hire you 👀
            </span>
          </div>
          {/* {click && (question1 || question2) &&
            <form onSubmit={handleSearchSubmit}>
              <input placeholder="name" />
              <button type="submit">Submit </button>
            </form>
          } */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
