
const initialState= {
    //FlatListBody
    flatListBodyData: [
        {name: 'aaaa'},
        {name: 'aaaa'},
    ],
    // Line 1
    bgImage1 : require ('../../sourceData/image/part4/header/bgImage1/img.png'),
    text_1_1 : "Message",
}

function MessageReducer(state = initialState, action) {
    return state;
}

export default MessageReducer