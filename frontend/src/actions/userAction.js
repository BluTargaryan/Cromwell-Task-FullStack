import axios from "axios";
import {userURL} from '../api.js'

export const loadUser = (id) => async (dispatch) => {
    //fetch axios
    const userData = await axios.get(`${userURL()}${id}`);
    dispatch({
        type: "FETCH_USER",
        payload: {
            user: userData.data
        }
    });
}