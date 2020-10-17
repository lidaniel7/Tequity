import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function requestPage() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="school"
                        name="school"
                        label="School"
                        fullWidth
                        autoComplete="family-name"
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
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
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
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default requestPage