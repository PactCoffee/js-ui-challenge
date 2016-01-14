const user = (state = {}, action) => {
    switch(action.type) {
        case 'USER_EXIST':
            return action.payload;
        case 'USER_DELETED':
            return {};
        case 'USER_UPDATED':
            return action.payload;
        default:
            return state;
    }
};

export default user;