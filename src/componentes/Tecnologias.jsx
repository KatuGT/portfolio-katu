import styled from "styled-components";
import TituloSecciones from "./TituloSecciones";
import LogoHTML from "../imagenes/logo-html-small.webp";
import LogoCSS from "../imagenes/logo-css3-small.webp";
import LogoJS from "../imagenes/logo-js-small.webp";
import LogoBoots from "../imagenes/logo-bootstrap-small.webp";
import LogoReact from "../imagenes/logo-react-small.webp";
import LogoStyled from "../imagenes/logo-styledcomp-small.webp";
import LogoVS from "../imagenes/logo-vscode-small.webp";
import LogoFigma from "../imagenes/logo-figma-small.webp";
import LogoPS from "../imagenes/logo-ps-small.webp";
import LogoAI from "../imagenes/logo-ai-small.webp";

const WrapperTecnologias = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;
`;

const WrapperLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  justify-content: center;
  margin-bottom: 4em;

  @media screen and (min-width: 566px) {
    width: 450px;
  }
`;

const Logo = styled.img`
  height: 75px;
  width: 75px;
  object-fit: contain;
`;

const InfoExtra = styled.p`
  text-align: center;
  margin-top: 0;
`;

const NuevoTituloSeccion = styled(TituloSecciones)`
  margin-bottom: 0.5em;
`

const Tecnologias = () => {
  return (
    <WrapperTecnologias id="tecno">
      <TituloSecciones>Herramientas y Tecnologias</TituloSecciones>
      <WrapperLogos>
        <Logo src={LogoHTML} alt="Logo HTML" />
        <Logo src={LogoCSS} alt="Logo CSS" />
        <Logo src={LogoJS} alt="Logo Javascript" />
        <Logo src={LogoBoots} alt="Logo Bootstrap" />
        <Logo src={LogoReact} alt="Logo React" />
        <Logo src={LogoStyled} alt="Logo styled Components" />
        <Logo src={LogoVS} alt="Logo VisualStudio Code" />
        <Logo src={LogoFigma} alt="Logo Figma" />
        <Logo src={LogoPS} alt="Logo Photoshop" />
        <Logo src={LogoAI} alt="Logo Illustrator" />
      </WrapperLogos>
      <NuevoTituloSeccion>Info extra</NuevoTituloSeccion>
      <InfoExtra>
        Poseo experiencia trabajando con la metodología ágil SCRUM y mi nivel de
        inglés es A2.
      </InfoExtra>
    </WrapperTecnologias>
  );
};

export default Tecnologias;
