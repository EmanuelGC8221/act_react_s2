// app/components/TarjetaTailwind.js
import Image from "next/image";

export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col p-4 m-2 w-64 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <Image
        src={imagen} // ejemplo: "/ejemplo1.jpg"
        alt={titulo}
        width={256}
        height={160}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h2 className="text-xl font-semibold">{titulo}</h2>
      <p className="text-gray-600">{descripcion}</p>
      <span className="mt-2 text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded">
        {etiqueta}
      </span>
    </div>
  );
}
