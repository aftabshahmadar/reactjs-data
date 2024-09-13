import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.css'; 
import Header from './header';
import Content from './content';
import Project from './projects';
import Experience from './experience';
import Footer from './footer';
import Contact from './contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <Header />
     <Content />
     <Project />
     <Experience />
     <Contact />
     <Footer />
  </>
);
