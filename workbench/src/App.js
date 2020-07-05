import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Contents from './components/Contents';
import dummytext from './utils/dummytext';
import Section from './components/Section';


function App() {

  const sectionRef = useRef([]);

  const [content, setContent] = useState([]);

  useEffect( () => {
    const contents = ['Innhold 1', 'Innhold 2', 'Innhold 3', 'Innhold 4', 'Innhold 5', 
    'Innhold 6', 'Innhold 7', 'Innhold 8', 'Innhold 9', 'Innhold 10',];

    sectionRef.current = new Array(contents.length);

    setContent(contents);

  }, []);

  const scrollTilRef = ( ref ) => {
    if ( !ref ) return;
    window.scrollTo({ top: ref.offsetTop, left: 0, behavior: 'smooth' });
  };

  const scrollTilSeksjon = (int) => {
    setTimeout( () => scrollTilRef(sectionRef.current[int]), 120);
    console.log(int);
  };
  


  return (
    <div className="App">
      <Contents
        contents={content} 
        scrollTilSeksjon={scrollTilSeksjon}
        />
      <div title={'section'} >
            {content.map( (title, index) => (
              <div ref={el => sectionRef.current[index] = el} key={index}>
                <Section 
                title={title}
                text={dummytext}
                key={index}
                />
              </div>
            ))}
        </div>
    </div>
  );
};

export default App;
