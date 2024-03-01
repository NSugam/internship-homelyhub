import axios from "axios";
import { propertyAction } from "./property-slice";

//action creater to fetch properties
export const getAllProperties = ()=> async (dispatch, getState)=> {
    try {
        dispatch(propertyAction.getRequest())

        const {searchParams} = getState().properties

        const reponse = await axios.get(`/api/v1/rent/listing`, {
            params: { ...searchParams },
        });

        if(!reponse){
            throw new Error("Couldn't fetch any properties")
        }

        const { data } = reponse;
        dispatch(propertyAction.getProperties(data))

    } catch (error) {
        dispatch(propertyAction.getError(error.message));
    }
}
