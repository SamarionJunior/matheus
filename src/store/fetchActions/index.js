import api from '../../services/api';
import { setState } from '../actions/produtos';

export const getAllCars = () => {
    return (dispatch) => {
        api
            .get('/produtos')
                .then(res => {
                    console.log(res)
                    dispatch(setState(res.data))
                })
                .catch(console.log)
    }
}