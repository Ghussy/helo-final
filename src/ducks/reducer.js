const initialState = {
    username: {},
    id: {},
    profilePic: {}
}

const GET_USER_DATA = 'GET_USER_DATA'


export function getUserData(userId, username, profilePic) {
    return {
        type: GET_USER_DATA,
        payload: {username, userId, profilePic}
    }
}

export default function reducer(state = initialState , action) {
    console.log('reducer function hit')
    switch(action.type) {
        case GET_USER_DATA: 
            return { ...state, username: action.payload.username}
        default: 
            return state;
    }
}