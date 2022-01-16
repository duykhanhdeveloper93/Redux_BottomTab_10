
const initialState= {
    //FlatListBody
    flatListBodyData: [
        {name: 'aaaa'},
        {name: 'aaaa'},
    ],
    // Header Show
    headerSelectIcon: require ('../../sourceData/image/part4/header/headerSelect/image.png'),
    headerNoSelectIcon: require ('../../sourceData/image/part4/header/headerNoSelect/image.png'),
    // Line 1
    bgImage1 : require ('../../sourceData/image/part4/header/bgImage1/img.png'),
    text_1_1 : "Message",
    scanIcon : require ('../../sourceData/image/part4/header/scan/icon.png'),
    searchIcon : require ('../../sourceData/image/part4/header/search/icon.png'),

    likeBigIcon:  require ('../../sourceData/image/part4/header/bigLikeOrange/icon.png'),
    messageBigIcon:   require ('../../sourceData/image/part4/header/messageBigIcon/icon.png'),
    commentBigIcon:  require ('../../sourceData/image/part4/header/commentBigIcon/icon.png'),
    helpBigIcon:   require ('../../sourceData/image/part4/header/helpBigIcon/icon.png'),

    textLikeBigIcon:  "Praise",
    textMessageBigIcon:  "Messages",
    textCommentBigIcon:  "Comments",
    textHelpBigIcon:  "Help",
    flatListData: [
        {
            avatarImg : require('../../sourceData/image/part1/flatList1/avatar1_home_fl1/img.png'),
            name : "Mirabelle Swift",
            imageSubName: require('../../sourceData/image/part4/body/flatList/subImage/official.png'),
            content1 : 'Adwords Keyword Research For Beginners.',
            time: '20/7',

        },
        {
            avatarImg : require('../../sourceData/image/part1/flatList1/avatar1_home_fl1/img.png'),
            name : "Mirabelle Swift",
            content1 : 'Adwords Keyword Research For Beginners.',
            time: '20/7',

        },
        {
            avatarImg : require('../../sourceData/image/part1/flatList1/avatar1_home_fl1/img.png'),
            name : "Mirabelle Swift",
            content1 : 'Adwords Keyword Research For Beginners.',
            time: '20/7',

        },
        {
            avatarImg : require('../../sourceData/image/part1/flatList1/avatar1_home_fl1/img.png'),
            name : "Mirabelle Swift",
            content1 : 'Adwords Keyword Research For Beginners.',
            time: '20/7',

        },

    ]   
}

function MessageReducer(state = initialState, action) {
    return state;
}

export default MessageReducer