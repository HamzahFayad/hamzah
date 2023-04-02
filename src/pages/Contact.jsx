import "../App.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Contact() {
  
  let navigate = useNavigate(); 
  const handleClose = () => {
    console.log('closed');
    let path = `/`; 
    navigate(path);
  }

  const [click, setClick] = useState(false);

  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  /*const [question3, setQuestion3] = useState("false");
  const [question4, setQuestion4] = useState("false");*/

  const handleQuestion1 = () => {
    setClick(true);
    setQuestion1(true);
    let answerBots = document.querySelectorAll(".answer-bot");
    answerBots.forEach((bot) => {
      bot.classList.add("hide");
    })
   /* setTimeout(() => {
      answerBots.forEach((bot) => {
        bot.classList.remove("hide");
          bot.classList.add("show");
    })
    }, 500)*/
  }

  const handleQuestion2 = () => {
    setClick(true);
    setQuestion2(true);
    let answerBots = document.querySelectorAll(".answer-bot");
    answerBots.forEach((bot) => {
      bot.classList.add("hide");
    })
  }

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
          <span className="span-bot greeting-bot">Hope you're doing great.</span>
          <span className="span-bot greeting-bot">Choose any question you'd like to ask. 😊😊😊</span>
          </div>
          {click &&
            <div className="Contact-Content New-Answers">
              {question1 && <span className="span-bot new-answer-bot">Hey, thank you for visiting my website.</span>}
              {question2 && <span className="span-bot new-answer-bot">Go to my Work Page :D</span>}
            </div>
          }
          <div className="Contact-Content Answers">
          <span className="span-bot answer-bot quest1" onClick={handleQuestion1}>Hey, nice to meet you.</span>
          <span className="span-bot answer-bot quest2" onClick={handleQuestion2}>Show me your work</span>
          <span className="span-bot answer-bot quest3">See your Social Media</span>
          <span className="span-bot answer-bot quest4">I'd like to hire you</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;