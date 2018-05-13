// imports

// actions

// action creators

// initial state

// reducer

const initialState = {
    isLoggedIn: localStorage.getItem("jwt") || false
}

// reducer functions

function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
// exports

// reducer export

export default reducer;