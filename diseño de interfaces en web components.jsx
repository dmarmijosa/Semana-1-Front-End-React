
// Definición de Componentes para la App

// Componente Navbar
const Navbar = ({ logo, enlaces, placeholderBusqueda, textoLogin, textoSignup }) => (
  <nav>
    <img src={logo} alt="Logo" />
    <ul>
      {enlaces.map((enlace, index) => (
        <li key={index}>{enlace}</li>
      ))}
    </ul>
    <input type="text" placeholder={placeholderBusqueda} />
    <button>{textoLogin}</button>
    <button>{textoSignup}</button>
  </nav>
);

// Componente Sidebar
const Sidebar = ({ inicio, preguntas, etiquetas, usuarios, empresas, trabajos, discusiones }) => (
  <aside>
    <ul>
      <li>{inicio}</li>
      <li>{preguntas}</li>
      <li>{etiquetas}</li>
      <li>{usuarios}</li>
      <li>{empresas}</li>
      <li>{trabajos}</li>
      <li>{discusiones}</li>
    </ul>
  </aside>
);

// Componente Banner
const Banner = ({ tituloPrincipal, descripcion, textoBotonRegistro }) => (
  <section>
    <h1>{tituloPrincipal}</h1>
    <p>{descripcion}</p>
    <button>{textoBotonRegistro}</button>
  </section>
);

// Componente Banner2
const Banner2 = ({ tituloServicio, textoExplorarEquipos, textoProbarGratis, textoOverflowAPI }) => (
  <section>
    <h2>{tituloServicio}</h2>
    <button>{textoExplorarEquipos}</button>
    <button>{textoProbarGratis}</button>
    <p>{textoOverflowAPI}</p>
  </section>
);

// Componente FAQs
const FAQs = ({ tituloFaqs, enlaceCentroAyuda, enlaceFeedback, enlaceAyudaEquipos, enlaceDocumentosLegales }) => (
  <section>
    <h3>{tituloFaqs}</h3>
    <ul>
      <li><a href="#">{enlaceCentroAyuda}</a></li>
      <li><a href="#">{enlaceFeedback}</a></li>
      <li><a href="#">{enlaceAyudaEquipos}</a></li>
      <li><a href="#">{enlaceDocumentosLegales}</a></li>
    </ul>
  </section>
);

// Componente Footer
const Footer = ({ elementosMenu, enlacesRedesSociales }) => (
  <footer>
    <ul>
      {elementosMenu.map((elemento, index) => (
        <li key={index}>{elemento}</li>
      ))}
    </ul>
    <ul>
      {enlacesRedesSociales.map((redSocial, index) => (
        <li key={index}>{redSocial}</li>
      ))}
    </ul>
  </footer>
);

// App Principal
const App = () => (
  <div>
    <Navbar
      logo="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png"
      enlaces={['Acerca de', 'Productos', 'OverflowAI']}
      placeholderBusqueda="Buscar..."
      textoLogin="Iniciar sesión"
      textoSignup="Registrarse"
    />
    <Sidebar
      inicio="Inicio"
      preguntas="Preguntas"
      etiquetas="Etiquetas"
      usuarios="Usuarios"
      empresas="Empresas"
      trabajos="Trabajos"
      discusiones="Discusiones"
    />
    <Banner
      tituloPrincipal="Cada Desarrollador..."
      descripcion="Durante más de 15 años hemos sido la plataforma de preguntas y respuestas para la comunidad tecnológica."
      textoBotonRegistro="Regístrate"
    />
    <Banner2
      tituloServicio="Servicios para empresas"
      textoExplorarEquipos="Explorar Equipos"
      textoProbarGratis="Probar Gratis"
      textoOverflowAPI="Overflow API"
    />
    <FAQs
      tituloFaqs="FAQs"
      enlaceCentroAyuda="Visitar el Centro de Ayuda"
      enlaceFeedback="Visitar Meta"
      enlaceAyudaEquipos="Visitar el Centro de Ayuda de Equipos"
      enlaceDocumentosLegales="Visitar Legales"
    />
    <Footer
      elementosMenu={['Equipos', 'Publicidad', 'Compañía']}
      enlacesRedesSociales={['Facebook', 'Twitter', 'LinkedIn']}
    />
  </div>
);

// Renderizar la App (suponiendo un entorno de React)
ReactDOM.render(<App />, document.getElementById('root'));
