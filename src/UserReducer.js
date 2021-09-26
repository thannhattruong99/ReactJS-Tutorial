export const reducer = ( state="Konichiwoa", action) =>{
    switch(action.type){
        case 'vi':
            return "Xin chao"
        case 'en':
            return "Hello"
        default: 
            return state
    }
}