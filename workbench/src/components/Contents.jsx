import React from 'react';

const Contents = props => {
    return (
        <div>
            {props.contents.map( (content, index) => (
                <div key={index}>
                    <button onClick={  () => props.scrollTilSeksjon(index)} key={index}>
                        {content}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Contents;