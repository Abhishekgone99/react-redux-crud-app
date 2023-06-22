import axios from "axios"
import { ADD_USER, DELETE_USER, GET_SINGLE_USER, GET_USERS, UPDATE_USER } from "./actionTypes"



export const getUsers = (users) => {
    return {
        type: GET_USERS,
        payload: users
    }
}

export const userDeleted = () => {
    return {
        type: DELETE_USER,
    }
}

export const userAdded = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const getUser = (user) => {
    return {
        type: GET_SINGLE_USER,
        payload: user
    }
}

export const userUpdated = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}


export const loadUsers = () => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_API}`)
            .then(response => {
                const users = response.data
                console.log("users data", users);
                dispatch(getUsers(users))
            })
            .catch(error => {
                console.log(error);
                alert(error)
            })
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
            .then(response => {
                const deleteduser = response.data
                console.log("deleted user data", deleteduser)
                dispatch(userDeleted())
                dispatch(loadUsers())
            })
            .catch(error => {
                console.log(error);
                alert(error)
            })
    }
}

export const addUser = (user) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_API}`, user)
            .then(response => {
                const addeduser = response.data
                console.log("added data", addeduser)
                dispatch(userAdded())
            })
            .catch(error => {
                console.log(error);
                alert(error)
            })
    }
}

export const getSingleUser = (id) => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_API}/${id}`)
            .then(response => {
                const singleUser = response.data
                console.log("single user data", singleUser)
                dispatch(getUser(singleUser))
            })
            .catch(error => {
                console.log(error);
                alert(error)
            })
    }
}

export const updateUser = (user, id) => {
    console.log("user_id", id);
    console.log("user_data", user);
    return (dispatch) => {
        axios.put(`${process.env.REACT_APP_API}/${id}`, user)
            .then(response => {
                const updatedUser = response.data
                console.log("single user data", updatedUser)
                dispatch(userUpdated())
            })
            .catch(error => {
                console.log(error);
                alert(error)
            })
    }
}