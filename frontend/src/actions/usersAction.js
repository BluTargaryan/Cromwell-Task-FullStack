import axios from "axios";
import {usersURL} from '../api.js'

export const loadUsers = () => async (dispatch) => {
    //fetch axios
    const usersData = await axios.get(usersURL());
    dispatch({
        type: "FETCH_USERS",
        payload: {
            users: usersData.data
        }
    });
}