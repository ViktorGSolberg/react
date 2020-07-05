import React from 'react';
import Section from './Section';
import './Sections.css';

const Sections = props => {
    return (
        <div title={'section'} ref={props.ref}>
            {props.titles.map( (title, index) => (
                <Section 
                title={title}
                text={props.text}
                key={index}
                reference={props.reference}
                />
            ))}
        </div>
    );
};

export default Sections;