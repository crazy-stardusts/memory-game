function ThemeBox({ theme, onClick }) {
  // theme is an object with properties: id, name, icon_url
  return (
    <div
      className="aspect-square justify-center items-center flex flex-col p-4 m-2 border rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={() => onClick(theme.id)}
    >
      {theme.icon_url && (
        <img
          src={theme.icon_url}
          alt={theme.name}
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
      )}
      <h3>{theme.name}</h3>
    </div>
  );
}

export default ThemeBox;