export const reducer = ( state=null, action) =>{
    if(action.type === 'login')
        return action.payload  // chua thong tin user
    return state
}