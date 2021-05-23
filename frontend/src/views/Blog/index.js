import { Container, Image } from "react-bootstrap";

export default function Blog() {
  return (
    <Container style={{ marginTop: "20vh" }}>
      <h1>EFECTOS DE LA FAUNA FERAL EN LA FAUNA NATIVA</h1>
      <span>
        La Comisión Nacional para el Conocimiento y Uso de la Biodiversidad
        (CONABIO) define a la fauna feral como al establecimiento de poblaciones
        de especies exóticas que fueron introducidas y que además se han
        establecido en el medio silvestre, derivadas forzosamente de una
        condición doméstica. Perros y gatos son el ejemplo más común de fauna
        feral (García-Padilla, 2014).
      </span>
      <div className="d-flex align-items-center justify-content-center">
        <Image
          src="https://res.cloudinary.com/jordiespinoza/image/upload/v1621760497/photo-1534695941753-73cf13435eb4_pg2noo.png"
          height="350px"
        style={{width:"40%", margin:"35px"}}
          className="img mt-4"
        />
      </div>
      <span>
        El registro de la fauna feral se ha relacionado con la urbanización en
        sus zonas colindantes, el crecimiento urbano cerca de las áreas
        naturales protegidas y los animales domésticos que pueden convertirse en
        fauna feral. Este tipo de fauna altera el equilibrio y genera un impacto
        negativo en la fauna nativa, pues con frecuencia los animales domésticos
        se introducen y coexisten en sitios que no les corresponden
        convirtiéndose en fauna feral y compitiendo con la fauna nativa
        (García-Padilla, 2014). Los perros al ser abandonados por sus dueños,
        tienden a agruparse y retomar sus características de lobos: organizarse
        en jaurías para la cacería y sus mecanismos de reproducción. Los perros
        ferales se alimentan de desperdicios orgánicos del hombre, no obstante,
        pueden ser buenos cazadores de animales silvestres de talla pequeña,
        mediana, incluso tallas grandes, o ser carroñeros. Nunca vuelven a
        acercarse a los humanos a menos que sea para atacarlos (Cruz-Reyes,
        2009; Weber, 2009).
      </span>
      <span>
        Por su parte, los gatos debido a su buen oído, sentido del olfato y
        hábitos nocturnos son buenos cazadores, causando un gran impacto sobre
        la fauna nativa en los sitios en los que han sido introducidos. Los
        gatos ferales se destacan como depredadores de especies endémicas de
        talla pequeña o mediana. Entre sus presas podemos encontrar distintas
        especies de aves, conejos, algunos roedores endémicos, reptiles y
        anfibios. Raramente salen de su área de aislamiento y no se dejan tocar
        por los humanos (Cruz-Reyes, 2009; Weber, 2009). El crecimiento de las
        poblaciones de fauna feral es causada en gran medida por las acciones y
        actividades del hombre, por lo que es importante promover la adopción de
        perros y gatos y su esterilización, así como evitar abandonar a estos
        animales y apoyar a distintas organizaciones que sirven de refugio para
        perros y gatos.
      </span>
      <h4>Referencias</h4>
      <span>
        Cruz-Reyes, A. (2009). Fauna feral, fauna nociva y zoonosis.
        Biodiversidad del ecosistema del Pedregal de San Angel. Sección:
        restauración, conservación y manejo, 453-461. García-Padilla, F.B.
        (2014). Incidencia de la fauna feral respecto a fauna nativa en el área
        natural protegida estero El Salado, municipio de Puerto Vallarta,
        Jalisco. Weber, M. (2010). Perros (Canis lupus familiaris) y gatos
        (Felis catus) ferales en la Reserva de la Biosfera Los Petenes,
        Campeche, México: Diagnóstico, efectos en la fauna nativa y perspectivas
        de control. Informe final proyecto SDP-18-2008 pnud-conanp-ecosur.
        Campeche, México.
      </span>
    </Container>
  );
}
