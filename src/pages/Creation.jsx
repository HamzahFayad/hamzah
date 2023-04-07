import "../App.css"
import { InstagramEmbed } from 'react-social-media-embed';

function Creation() {
  return (
    <div className="App">
        <div className="Grid-width-wide Center">
         <h1 className="Headline">Creation. 📷 </h1>
        </div>
      <div className="Full-width Center">
        <h2 className="Subheadline Text-color">Book I - Cinematic Streets</h2>
        <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '2rem', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/p/CpxdIFBM8vc" HoverCard={false} width={400} />
        <InstagramEmbed url="https://www.instagram.com/p/CppicAqMBX3" width={400} />
        <InstagramEmbed url="https://www.instagram.com/p/CqH482DMESM" width={400} />

        <InstagramEmbed url="https://www.instagram.com/p/CqNNo_UMNZl/" width={400} />
        <InstagramEmbed url="https://www.instagram.com/p/Cp9zBF4Mi1A/" width={400} />
        <InstagramEmbed url="https://www.instagram.com/p/CqfJMrnMS3W/" width={400} />
        </div>
      </div>
    </div>

  );
}

export default Creation;