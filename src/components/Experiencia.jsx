export default function Experiencia() {
  const experiencia = [
    { id: 1, puesto: "Desarrollador Full Stack (react + nodeJs)", empresa: "- Mercado libre (2023-2025)", periodo: "2023-2025", descripcion: "Desarrollo de features para el panel de vendedores usando React (Next.js) y Node.js (NestJS)." },
    { id: 2, puesto: "FullStack Developer (Angular + Spring Boot)", empresa: "Santander tech", periodo: "2022-2023", descripcion: "Migración de la aplicación de banca móvil legacy a Angular 16 y Spring Boot." },
    { id: 3, puesto: "FullStack Engineer (Vue.js + Django)", empresa: "Glovo", periodo: "2021-2022", descripcion: "Desarrollo de la plataforma de pedidos en tiempo real con Vue.js y Django." },
    { id: 4, puesto: "Tech Lead FullStack (Next.js + NestJS)", empresa: "Cabify", periodo: "2024 - presente", descripcion: "Coordinación de un equipo de 5 desarrolladores en la creación de una nueva plataforma de movilidad." },
    { id: 5, puesto: "FullStack Developer (React + Node.js)", empresa: "Globant", periodo: "2020-2022", descripcion: "Desarrollo de aplicaciones web escalables y mantenibles utilizando React y Node.js." },
    { id: 6, puesto: "Java FullStack Engineer", empresa: "Accenture", periodo: "2024-Actualidad", descripcion: "Desarrollo de soluciones empresariales utilizando Java y tecnologías web modernas." },
    { id: 7, puesto: "FullStack Mobile Developer (React Native + Firebase)", empresa: "Rappi", periodo: "2024-2024", descripcion: "Integración con Firebase para autenticación y almacenamiento." },
    { id: 8, puesto: "Python/Django FullStack Developer", empresa: "Mercado libre", periodo: "2020-2023", descripcion: "Creación de plataformas e-commerce con Django REST Framework (backend) y Vue.js (frontend)." },
    { id: 9, puesto: "Tech Lead FullStack (Next.js + NestJS)", empresa: "KHIPU", periodo: "2020-2022", descripcion: "Implementación de WebSockets para comunicación en tiempo real" },
    { id: 10, puesto: "FullStack DevOps Engineer (Ruby on Rails + AWS)", empresa: "GitHub", periodo: "2022-2025", descripcion: "Automatización de pipelines con GitLab CI/CD." }
  ];

  // Renderiza condicionalmente si no hay experiencia
  if (experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia Profesional</h3>
        <p>No se ha registrado experiencia profesional.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo})
            <ul>
              <li>Experiencia {exp.descripcion}</li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

