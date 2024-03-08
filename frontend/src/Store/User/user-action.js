import axios from 'axios';
import { userActions } from './user-slice';

// handle user signup

export const getSignup =(user) => async (dispatch) => {
    try {
        dispatch(userActions.getSignupRequest())
        const { data } = await axios.post("/api/v1/rent/user/signup", user)

        dispatch(userActions.getSignupDetails(data.user))
    } catch (error) {
        dispatch(userActions.getError(error.response.data.message))
    }
}


