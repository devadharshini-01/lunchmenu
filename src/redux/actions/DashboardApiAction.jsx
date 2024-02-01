import axios from "axios";
import { dashboardApiConstants } from "../constant/DashboardConstants";

export const DashboardGetAction = (centerId) => async (dispatch) => {
    await dispatch({
        type: dashboardApiConstants.REQUEST,
        payload: { loading: true },
    });
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

        await dispatch({
            type: dashboardApiConstants.SUCCESS,
            payload: { loading: false, data: data },
        });
    } catch (error) {
        await dispatch({
            type: dashboardApiConstants.ERROR,
            payload: { loading: false, data: {} },
        });
    }
};