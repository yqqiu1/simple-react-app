export default function categoryReducer(state = [], action = {}) {
    switch (action.type) {
        case 'FETCH_REQUESTED_HOOK': 
            return state;
        case 'FETCH_REQUESTED_SAGA':
            return state;
        case 'FETCH_SUCCEEDED':
            return state = [action.data];
        case 'FETCH_FAILED':
            return state;
        default:
            return state;
    }
}
