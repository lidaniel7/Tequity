import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Box from '@material-ui/core/Box';





const RequestPage = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [school, setSchool] = useState('')
    const [laptops, setLaptops] = useState('')
    const [cost, setCost] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [description, setDescription] = useState('')

    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastName = (event) => {
        setLastName(event.target.value)
    }

    const handleSchool = (event) => {
        setSchool(event.target.value)
    }

    const handleLaptops = (event) => {
        setLaptops(event.target.value)
    }

    const handleCost = (event) => {
        setCost(event.target.value)
    }

    const handleCity = (event) => {
        setCity(event.target.value)
    }

    const handleState = (event) => {
        if (event.target.value.length === 2) {
            setState(event.target.value[0].toLowerCase() + "-" + event.target.value[1].toLowerCase())
        } else {
            setState(event.target.value.toLowerCase())
        }
    }

    const handleCountry = (event) => {
        setCountry(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleNumber = (event) => {
        setNumber(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const submitRequest = (event) => {
        event.preventDefault()

        let finalState;
        let splitState = state.split(" ")
        if (splitState.length === 2) {
            finalState = splitState[0].toLowerCase() + "-" + splitState[1].toLowerCase()
        } else {
            finalState = splitState[0].toLowerCase()
        }

        const requestObject = {
            firstName: firstName,
            lastName: lastName,
            school: school,
            laptops: laptops,
            cost: cost,
            city: city,
            state: finalState,
            originalState: state,
            country: country,
            email: email,
            number: number,
            description: description
        }

        setFirstName('')
        setLastName('')
        setSchool('')
        setLaptops('')
        setCost('')
        setCity('')
        setState('')
        setCountry('')
        setEmail('')
        setNumber('')
        setDescription('')
        
        const addRequest = axios.post('http://localhost:3001/request', requestObject)
            .then(res => console.log(res.data));

    }


    return (
        <Box m={8}>
            <React.Fragment>
            <form onSubmit={submitRequest}>
            <Typography variant="h6" gutterBottom>
                Submit a Request
            </Typography>
            <Grid container spacing={3} ml={3}>
                <Grid item xs={12} sm={4} ml={3}>
                    <TextField
                        required
                        id="school"
                        name="school"
                        label="School"
                        fullWidth
                        autoComplete="family-name"
                        onChange={handleSchool}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField
                        required
                        id="laptops"
                        name="laptops"
                        label="Number of laptops"
                        fullWidth
                        autoComplete="family-name"
                        onChange={handleLaptops}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField
                        required
                        id="cost"
                        name="cost"
                        label="Cost Estimate"
                        fullWidth
                        autoComplete="family-name"
                        onChange={handleCost}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Teacher First Name"
                        fullWidth
                        autoComplete="given-name"
                        onChange={handleFirstName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Teacher Last Name"
                        fullWidth
                        autoComplete="family-name"
                        onChange={handleLastName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        onChange={handleCity}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        id="state" 
                        name="state" 
                        label="State/Province/Region" 
                        fullWidth
                        onChange={handleState}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        onChange={handleCountry}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="shipping country"
                        onChange={handleEmail}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="number"
                        name="number"
                        label="Phone Number"
                        fullWidth
                        autoComplete="shipping country"
                        onChange={handleNumber}
                    />
                </Grid>
                <Grid item xs>
                    <TextField 
                        label="Description"
                        multiline={true}
                        rows={6}
                        fullWidth={true}
                        size="medium"
                        onChange={handleDescription}
                    />
                </Grid>
            </Grid>
            <br />
            <br />
            <Button size="medium" variant="contained" color="primary" fullwidth={true} type="submit">Submit</Button>
            </form>
        </React.Fragment>
        </Box>
    );
}

export default RequestPage