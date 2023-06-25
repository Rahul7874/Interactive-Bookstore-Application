import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from "./actiontype.js"



export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});


export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios.get('https://api.example.com/data')
            .then((response) => {
                dispatch(fetchDataSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchDataFailure(error.message));
            });
    };
};