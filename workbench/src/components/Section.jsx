import React from 'react';
import './Section.css';

const Section = props => {
    return (
        <div className={'section'}>
            <div className={'title'}>
                {props.title}
            </div>
            <div className={'text'}>
                {props.text}
            </div>
        </div>
    );
};

export default Section;