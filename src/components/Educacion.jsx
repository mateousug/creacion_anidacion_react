export default function Educacion() {
  const educacion = [
    { id: 1, titulo: "Media tecnica en programacion de software", universidad: "Javiera londoño sevilla", periodo: "2022-2024" }
  ];

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong> - {edu.universidad} ({edu.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
  