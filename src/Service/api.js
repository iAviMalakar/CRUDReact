import axios from 'axios';

const url = 'http://localhost:3005/users';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUsers = async (users) => {
    return await axios.post(url, users);
}

export const editUser = async (id, users) => {
    return await axios.put(`${url}/${id}`, users);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}