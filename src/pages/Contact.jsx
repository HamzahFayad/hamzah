import "../App.css"
import { useNavigate } from "react-router-dom";


function Contact() {
  
  let navigate = useNavigate(); 
  const handleClose = () => {
    console.log('closed');
    let path = `/`; 
    navigate(path);
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
        <div className="Contact-Content Answers">
          <span className="span-bot answer-bot">Hey, nice to meet you.</span>
          <span className="span-bot answer-bot">Show me your work</span>
          <span className="span-bot answer-bot">See your Social Media</span>
          <span className="span-bot answer-bot">I'd like to hire you</span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;