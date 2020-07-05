import React, { useEffect, useRef, useState } from 'react';

const ArrayInputs = () => {
    
    // The number of references is undetermined
    // After fetching data, we can determine array's length
    const inputRef = useRef([]);
    
    // Data is empty before fetching
    const [data, setData] = useState([]);
    
    useEffect( () => {
    
        // We will fetch data and receive an array
        // let data = fetchData();
        // To simplify, let's suppose the array is:
        let data = ['Name', 'Age', 'Gender'];
        
        // We define the size of array after receiving the data
        inputRef.current = new Array(data.length);
        
        // We set state
        setData(data);
    
    }, []);
    
    useEffect( () => {
        
        // If data is filled -> focus
        if(data.length !== 0) {
            
            // Focusing the last <input></input>
            inputRef.current[data.length - 1].focus();
            
        }
        
    }, [data]);
    
    return(
        
        <div className = 'Inputs'>
            {data.map( (element, i) => <input ref = {el => inputRef.current[i] = el} placeholder = {element}></input> )}
        </div>
    
    );

}

export default ArrayInputs;