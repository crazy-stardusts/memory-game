const GameCard = ({ card, isFlipped, onClick }) => {
  return (
    <div
      className={`w-16 h-16 sm:w-20 sm:h-20 rounded shadow-md flex items-center justify-center cursor-pointer 
        ${isFlipped ? 'bg-white' : 'bg-gray-300 hover:bg-gray-400'} transition`}
      onClick={onClick}
    >
      {isFlipped && card?.icon_url ? (
        <img src={card.icon_url} alt={card.word} className="w-10 h-10 sm:w-12 sm:h-12" />
      ) : null}
    </div>
  );
};

export default GameCard;
