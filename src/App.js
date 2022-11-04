import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from './componentes/Navbar';
import SobreMi from './componentes/SobreMi';
import Divisor from './componentes/Divisor';
import Tecnologias from './componentes/Tecnologias';
import Main from './componentes/Main';
import Proyectos from './componentes/Proyectos';
import Footer from './componentes/Footer';
import Themes from './componentes/Themes';
import { useState } from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import Router from './Router';

const MyGlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg};
    transition: background-color ease 0.5s;
  }
`;

function App() {
  const [theme, setTheme] = useState('dark')

  
  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <MyGlobalStyle />
        <div className='App'>
          <Navbar setTheme = { setTheme } theme = { theme }  />
          <Main>
            <SobreMi />
            <Divisor />
            <Tecnologias />
            <Divisor />
            <RouterProvider router={Router} />
          </Main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
