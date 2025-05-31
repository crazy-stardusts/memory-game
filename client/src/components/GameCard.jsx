const GameCard = ({ card, isFlipped, onClick, color }) => {
  const colorClass = color ? `bg-[${color}]` : 'bg-gray-300';
  const colorHoverClass = color ? `hover:bg-[${color}]` : 'hover:bg-gray-400';
  return (
    <div className="w-12 h-12 sm:w-28 sm:h-28 perspective border-black border-[0.5px] rounded-2xl" onClick={onClick}>
      <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${isFlipped ? 'flip-180' : ''}`}>

        <div className= {colorClass + ' ' + colorHoverClass +  ' absolute inset-0 rounded-2xl shadow-md flex items-center justify-center backface-hidden'}>
        </div>

        <div className="absolute inset-0 bg-white rounded-2xl shadow-md flex items-center justify-center flip-180 backface-hidden">
          {card?.icon_url && (
            <img
              src={card.icon_url}
              alt={card.word}
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          )}
        </div>

      </div>
    </div>
  );
};



export default GameCard;