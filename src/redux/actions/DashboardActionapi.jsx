import { Constants } from "../constant/Constants";

const DashboardActionapi =()=> async(dispatch)=>{
    await dispatch({
        type: Constants.REQUEST,
        payload: { deva: true },
    });
    try{
        const {response} = await axios.get('https://fakestoreapi.com/products')
        await dispatch({
            type:"SUCCESS",
            payload: { deva: false, dd: response },
        });
    } catch (error){
        await dispatch({
           type:"ERROR",
           payload:{deva :false,error:error},
        })
    }

}
export default DashboardActionapi;