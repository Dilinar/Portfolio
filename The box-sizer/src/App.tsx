import React, { useState } from 'react';
import './style.css';
import Calculator from './components/Calculator';
import SetupDrawer from './components/Drawer';

export function App() {

    const [ measurementSum, setMeasurementSum ] = useState('');
    const [ maxLength, setMaxLength ] = useState('');
    const [ length, setLength ] = useState(1);
    const [ width, setWidth ] = useState(1);
    const [ height, setHeight ] = useState(1);

    return (
        <div className='app'>
            <h1>THE BOX-SIZER</h1>
            <Calculator 
                measurementSum = {measurementSum} 
                maxLength = {maxLength}
                length = {length}
                setLength = {setLength}
                width = {width}
                setWidth = {setWidth}
                height = {height}
                setHeight = {setHeight}
            />
            <SetupDrawer
                setMeasurementSum = {setMeasurementSum}
                measurementSum = {measurementSum}
                setMaxLength = {setMaxLength}
                maxLength = {maxLength}
                setLength = {setLength}
                setWidth = {setWidth}
                setHeight = {setHeight}
            />
        </div>
    );
}

export default App;
