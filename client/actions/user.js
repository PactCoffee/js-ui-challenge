import Api from '../api';

export const checkUser = () => {
    return dispatch => {
        const api = new Api();
        api.checkUserData(user => {
            if(user) {
            	dispatch({
                    type: 'USER_EXIST',
                    payload: user
            	});
            }		
        });
    };
};

export const deleteUser = () => {
    return dispatch => {
        const api = new Api();
        api.deleteUserData(deleted => {
            if(deleted) {
                dispatch({
                    type: 'USER_DELETED',
                    payload: {}
                });
            }
        });
    };
};

export const setUserData = (data) => {
    return dispatch => {
        const api = new Api();
        api.setUserData(data, updatedData => {
            if(updatedData) {
                dispatch({
                    type: 'USER_UPDATED',
                    payload: updatedData
                });
            }
        });
    };
};

