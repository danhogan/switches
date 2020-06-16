import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider({sendFilters}) {
    const classes = useStyles();
    const [distanceValue, setDistanceValue] = React.useState([0, 5]);
    const [forceValue, setForceValue] = React.useState([0, 100]);

    function handleFilterChange(){
        let allFilters = [
            {
                filter: 'actuationDistance',
                range: distanceValue
            },
            {
                filter: 'actuationForce',
                range: forceValue
            }
        ]

        sendFilters(allFilters)
    }
    
    const handleDistanceChange = (event, newValue) => {
        setDistanceValue(newValue);
        // sendData(newValue, 'actuationDistance')
        handleFilterChange()
    };

    const handleForceChange = (event, newValue) => {
        setForceValue(newValue);
        // sendData(newValue, 'actuationForce')
        handleFilterChange()
    };

    return (
        <div className={classes.root}>
            <Typography id="actuation-distance-range-slider" gutterBottom>
                Actuation Distance (mm)
            </Typography>
            <Slider
                value={distanceValue}
                onChange={handleDistanceChange}
                min={0}
                step={0.1}
                max={5}
                valueLabelDisplay="auto"
                aria-labelledby="distance-range-slider"
                getAriaValueText={valuetext}
            />

            <Typography id="actuation-force-range-slider" gutterBottom>
                Actuation Force (cN)
            </Typography>
            <Slider
                value={forceValue}
                onChange={handleForceChange}
                min={0}
                step={1}
                max={100}
                valueLabelDisplay="auto"
                aria-labelledby="force-range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
