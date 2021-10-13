import fetchCategory from './api';

import { store } from './store';

const dispatch = store.dispatch;


const fetchByHook = () => {
    dispatch({ type: 'FETCH_REQUESTED_HOOK'});
    fetchCategory()
        .then((result) => {
            dispatch({
                type: 'FETCH_SUCCEEDED',
                data: result
            })
        })
        .catch(err => {
            console.error(err); // log since might be a render err
            dispatch({
                type: 'FETCH_FAILED'
            });
        });
};

export const actions = {
    fetchByHook
};