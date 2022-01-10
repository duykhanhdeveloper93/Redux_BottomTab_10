
const initialState= {
    //FlatListBody
    flatListBodyData: [
        {name: 'aaaa'},
        {name: 'aaaa'},
    ],
    // Line 1
    bgImage1 : require ('../../sourceData/image/part4/header/bgImage1/img.png'),
    text_1_1 : "Message",
    scanIcon : require ('../../sourceData/image/part4/header/scan/icon.png'),
    searchIcon : require ('../../sourceData/image/part4/header/search/icon.png'),
}

function MessageReducer(state = initialState, action) {
    return state;
}

export default MessageReducer