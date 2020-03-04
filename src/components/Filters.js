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

export default function RangeSlider({sendData}) {
    const classes = useStyles();
    const [value, setValue] = React.useState([100, 400]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        sendData(newValue)
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Calories
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                min={0}
                step={1}
                max={500}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
