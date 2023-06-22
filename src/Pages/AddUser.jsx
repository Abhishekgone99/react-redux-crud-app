import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/actions';



const AddUser = () => {

    const disptach = useDispatch();
    const navigate = useNavigate();

    const [error, setError] = useState('')
    const [state, setState] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
    })

    const { name, email, contact, address } = state

    const onchangeHandler = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!name || !email || !contact || !address) {
            setError("Please fill all the input fields")
        } else {
            disptach(addUser(state));
            navigate('/')
            setError('')
        }
    }
    return (
        <div>
            <Button variant='contained' color='error' style={{ margin: "30px 0", width: "20ch" }} type='submit' onClick={() => navigate('/')} >Go back</Button >
            <h1>AddUser</h1>
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1.5, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={submitHandler}
            >
                <TextField id="outlined-basic" label="Name" variant="outlined" type='text' name='name' value={name} onChange={onchangeHandler} />
                <br />
                <TextField id="outlined-basic" label="Email" variant="outlined" type='email' name='email' value={email} onChange={onchangeHandler} />
                <br />
                <TextField id="outlined-basic" label="Contact" variant="outlined" type='number' name='contact' value={contact} onChange={onchangeHandler} />
                <br />
                <TextField id="outlined-basic" label="Address" variant="outlined" type='text' name='address' value={address} onChange={onchangeHandler} />
                <br />
                <Button variant='contained' color='primary' style={{ margin: "30px 0", width: "20ch" }} type='submit' >Submit</Button >
            </Box>
        </div>
    )
}

export default AddUser