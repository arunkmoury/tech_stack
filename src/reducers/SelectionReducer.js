export default (state = null, action) => {
    // reducers always call with state object which is the return state last time this reducer was executed
    //console.log(action)
    //return null;

    switch(action.type){
        case 'select_library':
            return action.payload

        default:
            return state;
    }
};