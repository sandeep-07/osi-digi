import React, { useState } from "react";
import Review from "./Review";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function AddressForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const {
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zipCode,
    country,
  } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='First name'
            fullWidth
            autoComplete='given-name'
            value={firstName}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='Last name'
            fullWidth
            autoComplete='family-name'
            value={lastName}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='address1'
            name='address1'
            label='Address line 1'
            fullWidth
            autoComplete='shipping address-line1'
            value={address1}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='address2'
            name='address2'
            label='Address line 2'
            fullWidth
            autoComplete='shipping address-line2'
            value={address2}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='city'
            name='city'
            label='City'
            fullWidth
            autoComplete='shipping address-level2'
            value={city}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='state'
            name='state'
            label='State/Province/Region'
            fullWidth
            value={state}
            onChange={(e) => onChange(e)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='country'
            name='country'
            label='Country'
            fullWidth
            autoComplete='shipping country'
            value={country}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color='secondary' name='saveAddress' value='yes' />
            }
            label='Use this address for payment details'
          />
        </Grid>
      </Grid>
      <Review formData={formData} />
    </React.Fragment>
  );
}
