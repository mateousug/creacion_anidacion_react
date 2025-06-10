export default function CabeceraCV({nombre, profesion, telefono, correo}) {
  return (
    <header>
      <h1>Nombre: {nombre}</h1>
      <h2>{profesion}</h2>
        <p>
            <strong>Teléfono:</strong> {telefono}
        </p>
        <p>
            <strong>Correo:</strong>
            <a href={correo}></a>
        </p>
        <img src="Imagen de WhatsApp 2025-05-25 a las 20.24.23_10f3515f.jpg" alt={nombre} />
    </header>
  );
}
