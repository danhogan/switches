import React from 'react';
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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

let data = [ //was const - make state work
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];



function filterByCalories(data, low, high){ //separate out filter category/label
    return data
        .filter(x => x.calories >= low)
        .filter(y => y.calories <= high)
}

function getCaloriesRange(range){
    console.log('range:', range)
    data = filterByCalories(data, range[0], range[1]) //make the data actually change
}


function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">

                <NavBar />

                <div className="main-container">
                    <div className="filters">
                        <Filters sendData={getCaloriesRange} />
                    </div>
                    <div className="results">
                        <ResultsTable rows={data} />
                    </div>
                </div>
            
            </div>
        </ThemeProvider>
    );
}

export default App;
