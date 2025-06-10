export default function Perfil({texto, habilidadesBlandas}) {
  return (
    <section>
      <h3>Perfil</h3>
      <p>
        {texto}
      </p>
      <h3>
        Habilidades blandas
      </h3>
      <p>
        {habilidadesBlandas}
      </p>
    </section>
  );
}
