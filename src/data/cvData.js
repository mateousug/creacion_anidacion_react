// src/data/cvData.js
export const cabecera = {
  nombre: "Mateo Usuga Vasco",
  profesion: "Desarrollador fullstack junior",
    telefono: "+57 324 3815639",
    correo: "mateo.usuga.v21@gmail.com"
};

export const perfil = {
  texto:
    "Desarrollador de software con experiencia en la creacion de interfaces graficas y aplicaciones web. Me apasiona aprender nuevas tecnologias y mejorar mis habilidades.",
    habilidadesBlandas: "Trabajo en equipo, comunicacion efectiva, adaptabilidad y resolucion de problemas."
};

export const educacion = [
  {
    id: 1,
    titulo: "Media tecnica en programacion de software",
    institucion: "Javiera londoño sevilla",
    periodo: "2022-2024"
  }
];

export const experiencia = [
  {
    id: 1, puesto: "Desarrollador Full Stack (react + nodeJs)", empresa: "- Mercado libre (2023-2025)", periodo: "2023-2025", descripcion: "Desarrollo de features para el panel de vendedores usando React (Next.js) y Node.js (NestJS)." ,
     id: 2, puesto: "FullStack Developer (Angular + Spring Boot)", empresa: "Santander tech", periodo: "2022-2023", descripcion: "Migración de la aplicación de banca móvil legacy a Angular 16 y Spring Boot." ,
     id: 3, puesto: "FullStack Engineer (Vue.js + Django)", empresa: "Glovo", periodo: "2021-2022", descripcion: "Desarrollo de la plataforma de pedidos en tiempo real con Vue.js y Django." ,
     id: 4, puesto: "Tech Lead FullStack (Next.js + NestJS)", empresa: "Cabify", periodo: "2024 - presente", descripcion: "Coordinación de un equipo de 5 desarrolladores en la creación de una nueva plataforma de movilidad." ,
     id: 5, puesto: "FullStack Developer (React + Node.js)", empresa: "Globant", periodo: "2020-2022", descripcion: "Desarrollo de aplicaciones web escalables y mantenibles utilizando React y Node.js." ,
     id: 6, puesto: "Java FullStack Engineer", empresa: "Accenture", periodo: "2024-Actualidad", descripcion: "Desarrollo de soluciones empresariales utilizando Java y tecnologías web modernas." ,
     id: 7, puesto: "FullStack Mobile Developer (React Native + Firebase)", empresa: "Rappi", periodo: "2024-2024", descripcion: "Integración con Firebase para autenticación y almacenamiento." ,
     id: 8, puesto: "Python/Django FullStack Developer", empresa: "Mercado libre", periodo: "2020-2023", descripcion: "Creación de plataformas e-commerce con Django REST Framework (backend) y Vue.js (frontend)." ,
     id: 9, puesto: "Tech Lead FullStack (Next.js + NestJS)", empresa: "KHIPU", periodo: "2020-2022", descripcion: "Implementación de WebSockets para comunicación en tiempo real" ,
     id: 10, puesto: "FullStack DevOps Engineer (Ruby on Rails + AWS)", empresa: "GitHub", periodo: "2022-2025", descripcion: "Automatización de pipelines con GitLab CI/CD." 
  },
  {
    id: 2,
    puesto: "Instructor TIC",
    empresa: "SENA",
    periodo: "2020-2022"
  }
];

export const stackTecnologias = [
  { id: 1, nombre: "React", tipo: "frontend" },
  { id: 2, nombre: "Node.js", tipo: "backend" },
  { id: 3, nombre: "JavaScript", tipo: "frontend" },
  { id: 4, nombre: "PostgreSQL", tipo: "base de datos" }
];

/* Nuevas secciones */
export const proyectos = [
  {
    id: 1,
    nombre: "Web E-commerce",
    descripcion: "Plataforma de venta de productos en línea con carrito de compras.",
    enlace: "https://github.com/usuario/proyecto-ecommerce"
  },
  {
    id: 2,
    nombre: "App de Tareas",
    descripcion: "Aplicación móvil para gestionar tareas diarias con React Native.",
    enlace: "https://github.com/usuario/app-tareas"
  }
];

export const habilidades = [
  { id: 1, nombre: "Comunicación", nivel: "Avanzado" },
  { id: 2, nombre: "Trabajo en Equipo", nivel: "Intermedio" },
  { id: 3, nombre: "Resolución de Problemas", nivel: "Avanzado" }
];
