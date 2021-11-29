import React from 'react'
import cars from '../cars.json'
import {useParams} from 'react-router-dom';
import { Container, Paper, Chip } from '@material-ui/core';
import '../App.css';





const Car = (props) => {
    //const paperContainer = useStyles();
    let carId = useParams()
    let filteredCar = cars.find(car => car.id === parseInt(carId.id))
   
    return (
        <Container className='chip-container'>
            <Paper elevation={5}>
                <Container m={45}>
                    <h1>{filteredCar.Name}</h1>
                    <Chip size="medium" variant="outlined" label={`id: ${filteredCar.id}`} />
                    <Chip size="medium" variant="outlined" label={`Name: ${filteredCar.Name}`} /><br></br><br></br>
                    <Chip size="medium" label={`MPG: ${filteredCar.Miles_per_Gallon}`} />
                    <Chip size="medium" label={`Cylinders: ${filteredCar.Cylinders}`} /><br></br><br></br>
                    <Chip size="medium" label={`Displacement: ${filteredCar.Displacement}`} />
                    <Chip size="medium" label={`Horsepower: ${filteredCar.Horsepower}`} /><br></br><br></br>
                    <Chip size="medium" label={`Weight(lbs): ${filteredCar.Weight_in_lbs}`} />
                    <Chip size="medium" label={`Acceleration: ${filteredCar.Acceleration}`} /><br></br><br></br>
                    <Chip size="medium" variant="outlined" label={`Year: ${filteredCar.Year}`} />
                    <Chip size="medium" variant="outlined" label={`Country: ${filteredCar.Origin}`} />
                </Container>
            </Paper>
        </Container>
    )
}



export default Car