import TarjetaGlobal from "./components/TarjetaGlobal";
import TarjetaModulo from "./components/TarjetaModulo";
import TarjetaDinamica from "./components/TarjetaDinamica";
import TarjetaTailwind from "./components/TarjetaTailwind";

export default function Page() {
  return (
    <main className="p-6 space-y-10">
      <section>
        <h1 className="text-2xl font-bold mb-4"> Tarjeta con CSS Global</h1>
        <TarjetaGlobal 
          titulo="Soy Global" 
          contenido="estilos definidos en globals.css." 
          color="blue"
        />
      </section>

      <section>
        <h1 className="text-2xl font-bold mb-4"> Tarjeta con CSS Modules</h1>
        <TarjetaModulo 
          nombre="Tarjeta Módulo" 
          descripcion="Tengo estilos aislados y variantes." 
          categoria="Ejemplo"
          variante="tarjetaExito"
        />
      </section>

      <section>
        <h1 className="text-2xl font-bold mb-4"> Tarjeta con Estilos en Línea</h1>
        <TarjetaDinamica 
          titulo="la Dinámica" 
          contenido=" colores y tamaño cambian según props." 
          colorFondo="#ffe0b9" 
          colorTexto="#4e342e" 
          ancho="300px" 
          activo={true}
        />
      </section>

      <section>
        <h1 className="text-2xl font-bold mb-4"> Tarjeta con Tailwind CSS</h1>
        <TarjetaTailwind 
          titulo="Soy Tailwind" 
          descripcion="Un card moderno usando utilidades de Tailwind." 
          imagen="/tailwindImage.png"
          etiqueta="Tailwind imagen local❤️"
        />
      </section>
    </main>
  );
}