
export default function TarjetaDinamica({ 
  titulo, 
  contenido, 
  colorFondo, 
  colorTexto, 
  ancho, 
  activo 
}) {
  const style = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: "1rem",
    margin: "1rem auto",
    borderRadius: "12px",
    boxShadow: activo
      ? "0 6px 14px rgba(0,0,0,0.25)"
      : "0 4px 8px rgba(0,0,0,0.1)",
    transform: activo ? "scale(1.03)" : "scale(1)",
    transition: "all 0.3s ease-in-out"
  };

  return (
    <div style={style}>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}
