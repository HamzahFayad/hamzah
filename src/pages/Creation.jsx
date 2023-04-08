import "../App.css"
import { InstagramEmbed } from 'react-social-media-embed';

function Creation() {
  return (
    <div className="App">
        <div className="Grid-width-wide Center">
        <h1 className="Headline">Visual Stories. 📷 </h1>
         <div className="Round Round2">
        </div> 
        </div>
      <div className="Grid-width-wide">
        <hr></hr>
        <h2 className="Subheadline Text-color">Book I - Cinematic Streets</h2>
        <div style={{ padding: '2rem 0', display: 'flex', flexFlow: 'row wrap', gap: '2rem', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/p/CpxdIFBM8vc" width={350} />
        <InstagramEmbed url="https://www.instagram.com/p/CqH482DMESM" width={350} />
        <InstagramEmbed url="https://www.instagram.com/p/CppicAqMBX3" width={350} />

        <InstagramEmbed url="https://www.instagram.com/p/CqNNo_UMNZl/" width={350} />
        <InstagramEmbed url="https://www.instagram.com/p/CqfJMrnMS3W/" width={350} />
        <InstagramEmbed url="https://www.instagram.com/p/Cp9zBF4Mi1A/" width={350} />
        </div>
      </div>
      <div className="Grid-width-wide">
        <hr></hr>
        <h2 className="Subheadline Text-color">Book II - Busy Market</h2>
      </div>
      <div className="Grid-width-wide">
        <hr></hr>
        <h2 className="Subheadline Text-color">Cinematic Film</h2>
      </div>
    </div>

  );
}

export default Creation;