import React, { useState } from 'react'
import { FormGroup, FormControl, InputLabel, Input, makeStyles, Button, Typography } from '@material-ui/core'
import { addUsers } from '../Service/api'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    conatiner: {
        width: "50%",
        margin: "5% 0 0 25%",
        '&>*': {
            marginTop: 20,
        }

    }
})

const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: '',

}

function AddUsers() {
    const [users, setUsers] = useState(initialValues)
    const { name, username, email, phone } = users
    const classes = useStyles();
    const history = useHistory();
    const onValueChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }

    const addUsersDetails = async () => {
        await addUsers(users)
        history.push('./all')
    }
    return (
        <FormGroup className={classes.conatiner}>
            <Typography variant="h4">Add Users</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => addUsersDetails()}>Add Users</Button>
        </FormGroup>
    )
}

export default AddUsers
