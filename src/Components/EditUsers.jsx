import React, { useState, useEffect } from 'react'
import { FormGroup, FormControl, InputLabel, Input, makeStyles, Button, Typography } from '@material-ui/core'
import { getUsers, editUser } from '../Service/api'
import { useHistory, useParams } from 'react-router-dom'

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

function EditUsers() {
    const [users, setUsers] = useState(initialValues)
    const { name, username, email, phone } = users
    const { id } = useParams();
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        loadUserData()
    }, [])

    const loadUserData = async () => {
        const response = await getUsers(id);
        //console.log(response);
        setUsers(response.data)
    }

    const editUsersDetails = async () => {
        const response = await editUser(id, users);
        history.push('/all')
    }

    const onValueChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }


    return (
        <FormGroup className={classes.conatiner}>
            <Typography variant="h4">Edit User</Typography>
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
            <Button variant="contained" color="primary" onClick={() => editUsersDetails()}>Edit User</Button>
        </FormGroup>
    )
}

export default EditUsers
