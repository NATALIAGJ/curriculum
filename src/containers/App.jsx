import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData';
import Loader from '../components/Loader';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #FFFFFF;
    }
`;

const App = () => {
    const data = useGetData();
    return data.length === 0 ? <Loader /> : (
        <Loader />
        
    );
}   

export default App;