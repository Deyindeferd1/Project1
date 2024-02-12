import React, { useState, useEffect } from 'react';
import './App.css';
import backgroundMusic from "./assets/20.mp3"

const App = () => {
  const cardMessages = [
    "NOW YOU HAVE TO SMILE 🤗",
    "Staring at your vidoes your have that simile that feels like a day of warm sun in the winter 🧸.",
    "You are someone i might never have in real life so in every art, pages and poem, I'll confess i might someoene that turned me around in just a night again and again even if I'm not heard. 🔱",
    "In your smile, trials dissolve, replaced by the sweetness of laughter a symphony of joy orchestrating life's melody. 💊",
    "My shoulder is always yours whether if it's to cry on or put your arms ot leg on I'll always be here if you want me to. 🔮",
    "When life writes its script, your smile improvises, turning every challenge into a scene of joy and celebration. 💃🏽",
    "🧷 I loved the my loneliness, i was fine in the dark but when the universe called me to you, you became my light that made me step out from the shadows. 🎀",
    "If your eyes were the ocean i would dive in without hesitation for a chance to swim for you, even if i risk drowing 💀",
    "If i had a flower for everytime you came into my mind today i would only have one because you never left it 🫀",
    "My 🌔, everytime your eyes cry liike the sea, i will be the sand that waits for you on the shore to dry your tears...",
    "When life tests your strength, your smile becomes a shield, deflecting adversity and radiating the warmth of courage. 😇",
    "Contemplating about you is parallels to the sun, excessive pondering risks overdrive. 👻",
    "Each smile is a love note to the universe, a testament to the beautiful resilience that resides within your spirit. 🧛🏻",
    "If you asked me how many times you came into my mind... I would say once because you never seem to wanna leave 🥀",
    "They say a druken mind tells sober thoughts, what then does that makses a man such as i? Blissfully intoxicated with your beauty, and essense.❤️",
    "And in the end, the love you take is equal to the love you make. The End 🙇",
    "Keep grinning, it's like turning up the brightness on multiple faces in the room! Don't let anything hold you back!!!! 💔",
  ];

  
  return (
    <div className="card-container">
      <HoverSwitchCards cardMessages={cardMessages} />
    </div>
  );
}

const HoverSwitchCards = ({ cardMessages }) => {
  const [activeCard, setActiveCard] = useState(0);

  const handleHover = () => {
    setActiveCard((prev) => (prev + 1) % cardMessages.length);
  };

  return (
    <div className={`card card${activeCard + 1}`} onMouseEnter={handleHover}>
      {cardMessages[activeCard]}
    </div>
  );
}

const AppWithCrushCard = () => {
  useEffect(() => {
    const audio = new Audio(backgroundMusic);
    audio.loop = true;
    audio.play().catch(error => {
      // Autoplay was prevented. Handle the error here.
      console.error('Autoplay was prevented:', error);
    });

    return () => {
      // Cleanup: Stop audio when the component unmounts.
      audio.pause();
    };
  }, []); // Empty dependency array ensures this runs only once on mount.

  return (
    <div>
      <App />
      <audio autoPlay loop>
        <source src={backgroundMusic} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default AppWithCrushCard;
