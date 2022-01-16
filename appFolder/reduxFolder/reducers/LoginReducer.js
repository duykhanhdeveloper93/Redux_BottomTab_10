const initialState = {
    // 1
    image1: require('../../sourceData/image/loginPart/image1/image.png'),
    image2: require('../../sourceData/image/loginPart/image2/image.png'),
    eyeOffImage: require('../../sourceData/image/loginPart/eyeOff/eye-off.png'),
    user: null
}

const LoginReducer = (state = initialState, action)  => {
    switch(action.type) {
        case 'ACTION_LOGIN':
            return {...state,user : action.user}
        default:
            return state;
    }
}

export default LoginReducer