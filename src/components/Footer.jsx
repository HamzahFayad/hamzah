import "../App.css"

function Footer() {
    return (
      <>
      <footer>
          <div className="footer Grid-width-wide bottom-space">
              <p>Github</p>
              <p>Instagram</p>
              <p>Mail</p>
          </div>
          <p className="Center">© { new Date().getFullYear() } hamzah fayad</p>
      </footer>
     </>
  );
}

export default Footer;
