import React, { useState } from 'react';
import '../Game.css'; // Assurez-vous de créer un fichier Game.css pour les styles

export default function Game() {
  const [revealed, setRevealed] = useState([false, false, false]);
  const [gameOver, setGameOver] = useState(false);
  const [revealedGift, setRevealedGift] = useState(null); // Définir revealedGift ici
  const giftImages = ["tv.jpg", "cup.jpg", "shoes.jpg"];

  const handleClick = (index) => {
    if (!revealed[index] && !gameOver) {
      // Choisir un cadeau au hasard pour cette boîte
      const randomGift = giftImages[Math.floor(Math.random() * giftImages.length)];
      const newRevealed = [false, false, false];
      newRevealed[index] = true;
      setRevealed(newRevealed);
      setGameOver(true); // Désactiver le jeu après avoir révélé un cadeau
      setRevealedGift(randomGift);
    }
  };

  return (
    <div className='w-11/12 mt-4 mx-auto'>
      <div className='px-2 py-5'>
        <p>
          <span className='text-[#FFD700] text-2xl font-bold'>Cadeau surprise: </span>
          <span className='text-light text-gray-300'>Fais un clic sur un box :-)</span>
        </p>
      </div>
      <div className='flex justify-center'>
        {revealed.map((isRevealed, index) => (
          <div
            key={index}
            className={`flex justify-center items-center box ${isRevealed ? 'revealed' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img
              src={isRevealed ? revealedGift : "gift.png"}
              className="cake"
              alt="gift"
            />
          </div>
        ))}
      </div>
      {gameOver && (
        <div className='px-2 py-5 text-center'>
          <span className='text-[#FFD700] text-2xl font-bold'>Cadeau révélé!</span>
        </div>
      )}
    </div>
  );
}
