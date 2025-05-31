export default function ThemeBox({ theme, onClick }) {
  return (
    <div
      className={`bg-[${theme.color}] h-[200px] w-[200px] p-4 rounded-3xl shadow-md flex 
        flex-col items-center justify-between cursor-pointer hover:shadow-lg hover:scale-105 
        transition-transform duration-300 border-black border-[1px] border-solid`}
      onClick={() => onClick(theme.id)}
    >
      <div className="flex-grow flex items-center justify-center w-full">
        {theme.icon_url && (
          <img
            className="max-w-[160px] max-h-[130px] object-contain"
            src={theme.icon_url}
            alt={theme.name}
          />
        )}
      </div>
      <h3 className="font-playpen font-medium text-black text-center mt-2">
        {theme.name}
      </h3>
    </div>
  );
}

