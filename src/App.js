import React, { useState } from 'react';
import 'typeface-roboto';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import amber from '@material-ui/core/colors/amber';

import NavBar from './components/NavBar'
import ResultsTable from './components/ResultsTable'
import Filters from './components/Filters'

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: deepPurple,
        secondary: amber
    },
});

function createData(brand, name, type, actuationDistance, actuationForce) {
    return { brand, name, type, actuationDistance, actuationForce };
}

const originalData = [
    createData('Cherry', 'MX Black', 'Linear', 2, 60),
    createData('Cherry', 'MX Red', 'Linear', 2, 45),
    createData('Cherry', 'MX Blue', 'Clicky', 2.2, 60),
    createData('Cherry', 'MX Brown', 'Tactile', 2, 55),
];


function filterData(data, filters){
    filters.forEach((oneFilter) => {
        data = data
            .filter(x => x[oneFilter.filter] >= oneFilter.range[0])
            .filter(y => y[oneFilter.filter] <= oneFilter.range[1])
    })

    return data
}


function App() {
    const [theData, setTheData] = useState(originalData);

    function getRange(allFilters){
        let newData = filterData(originalData, allFilters)
        setTheData(newData)
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">

                <NavBar />

                <div className="main-container">
                    <div className="filters">
                        <Filters sendFilters={getRange} />
                    </div>
                    <div className="results">
                        <ResultsTable rows={theData} />
                    </div>
                </div>
            
            </div>
        </ThemeProvider>
    );
}

export default App;
