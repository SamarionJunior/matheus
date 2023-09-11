import api from '../../services/api';
import { setState } from '../actions/produtos';

export const getAllCars = () => {
    return (dispatch) => {
        api
            .get('/produto/')
                .then(res => {
                    // console.log(res.data.produtos)
                    dispatch(setState(res.data.produtos))
                })
                .catch(console.log)
                // .finally(console.log("oi"))
    }
}