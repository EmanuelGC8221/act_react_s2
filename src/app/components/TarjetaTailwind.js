export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col bg-white border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-72 m-4">
      <img src={imagen} alt={titulo} className="rounded-t-lg w-full h-40 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-gray-800">{titulo}</h2>
        <p className="text-gray-600">{descripcion}</p>
        <span className="text-sm text-gray-500">{etiqueta}</span>
      </div>
    </div>
  );
}