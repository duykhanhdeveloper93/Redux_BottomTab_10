
const initialState = {
    //----------------------------- Header----------------------------
    //************Line1**********
    image: require('../../sourceData/image/part1/homeSelect/icon.png'),
    image2: require('../../sourceData/image/part1/underLine1/index.png'),
    ringImg: require('../../sourceData/image/part1/ring/icon.png'),
    searchIcon: require('../../sourceData/image/part1/search/icon.png'),
    recordIcon: require('../../sourceData/image/part1/record/icon.png'),
   
    textSelect : 'Select',
    textDiscover : 'Discover',
    placeHolderText1: 'Send the sample',
    //************Line3**********
    rankingIcon: require('../../sourceData/image/part1/ranking/icon.png'),
    discussIcon: require('../../sourceData/image/part1/discuss/icon.png'),
    surroundingIcon: require('../../sourceData/image/part1/discuss/icon.png'),
    //************Line4**********
    backGroundImgLine1: require('../../sourceData/image/part1/backGround1/bg1.png'),
    //************FlatListData**********
    flatListData: [
        {
            avatarImg : require('../../sourceData/image/part1/flatList1/avatar1_home_fl1/img.png'),
            name : "Mirabelle Swift",
            content1 : 'Adwords Keyword Research For Beginners.',
            img1: require('../../sourceData/image/part1/flatList1/img1_home_fl1/img.png'),
            icon1 : require('../../sourceData/image/part1/flatList1/icon1_home_fl1/icon.png'),
            icon2 : require('../../sourceData/image/part1/flatList1/icon2_home_fl1/icon.png'),
            icon3 : require('../../sourceData/image/part1/flatList1/icon3_home_fl1/icon.png'),
            numberLike: 1222,
            numberComment: 122,
            numberShare: 33,

        },
        {
            avatarImg : require('../../sourceData/image/part1/flatList1/avatar2_home_fl1/img.png'),
            name : "William Watts",
            content1 : "How To Boost Your Traffic Of Your Blog And Destroy The Competition.😏 😏 😋",
            img1: require('../../sourceData/image/part1/flatList1/i21/img.png'),
            img2: require('../../sourceData/image/part1/flatList1/i22/img.png'),
            img3: require('../../sourceData/image/part1/flatList1/i23/img.png'),
            img4: require('../../sourceData/image/part1/flatList1/i24/img.png'),
            img5: require('../../sourceData/image/part1/flatList1/i25/img.png'),
            img6: require('../../sourceData/image/part1/flatList1/i26/img.png'),
            img7: require('../../sourceData/image/part1/flatList1/img7_fl1/img.png'),
            img8: require('../../sourceData/image/part1/flatList1/img8_fl1/img.png'),
            icon1 : require('../../sourceData/image/part1/flatList1/icon1_home_fl1/icon.png'),
            icon2 : require('../../sourceData/image/part1/flatList1/icon2_home_fl1/icon.png'),
            icon3 : require('../../sourceData/image/part1/flatList1/icon3_home_fl1/icon.png'),
            numberLike: 1222,
            numberComment: 122,
            numberShare: 33,
        },
        {
            avatarImg : require('../../sourceData/image/part1/flatList1/avatar3_home_fl1/img.png'),
            name : "Jorge Long",
            content1 : 'A dog is a beloved, intelligent, and very loyal animal. So I like dogs very much.',
            img1: require('../../sourceData/image/part1/flatList1/img_2_1_home_fl1/img.png'),
            icon1 : require('../../sourceData/image/part1/flatList1/icon1_home_fl1/icon.png'),
            icon2 : require('../../sourceData/image/part1/flatList1/icon2_home_fl1/icon.png'),
            icon3 : require('../../sourceData/image/part1/flatList1/icon3_home_fl1/icon.png'),
            numberLike: 1222,
            numberComment: 122,
            numberShare: 33,
        },
        {
            avatarImg : require('../../sourceData/image/part1/flatList1/avatar4_home_fl1/img.png'),
            name : "Miguel Parsons",
            content1 : 'A dog is a beloved, intelligent, and very loyal animal. So I like dogs very much.',
            img1: require('../../sourceData/image/part1/flatList1/img1_home_fl1/img.png'),
            icon1 : require('../../sourceData/image/part1/flatList1/icon1_home_fl1/icon.png'),
            icon2 : require('../../sourceData/image/part1/flatList1/icon2_home_fl1/icon.png'),
            icon3 : require('../../sourceData/image/part1/flatList1/icon3_home_fl1/icon.png'),
            numberLike: 1222,
            numberComment: 122,
            numberShare: 33,
        },

    ]   
}
function HomeReducer(state = initialState, action) {
    return state;
}

export default HomeReducer