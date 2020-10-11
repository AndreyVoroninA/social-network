import {ProfileAPI} from './../api/api';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    {
      id: 1,
      message: "Привет, Ярослав! Я тут react неплохо затестил",
      imgsrc:
        "https://i05.fotocdn.net/s108/1e036ec8ac4b2730/user_xl/2389500746.jpg",
      likesCount: 17,
    },
    {
      id: 2,
      message: "Сейчас поищем! Как тестить?",
      imgsrc:
        "https://avatars.mds.yandex.net/get-pdb/1903762/99abcbb6-4f4f-4988-b3f4-217827e4856c/s1200?webp=false",
      likesCount: 11,
    },
  ],
  newPostText: "Nice Horse",
  profile: null
}

const profileReducer = (state = initialState, action) => {
   
   switch (action.type) {
      case ADD_POST:
         {
            let newPost = {
              id: 1,
              message: state.newPostText,
              imgsrc:
                "http://drasler.ru/wp-content/uploads/2019/01/kirill-zakirov-liliia-smirnova-litso-ochki-dlinnye-volosy-be.jpg",
              likesCount: 0,
            };

            return {
              ...state,
              posts: [...state.posts, newPost],
              newPostText: ''
            }
          }; 

      case UPDATE_NEW_POST_TEXT: 
      {
        return {
          ...state,
          newPostText: action.newText
        }
   };
   case SET_USER_PROFILE:
     {
       return {...state, profile: action.profile}
     };
   default: return state;
  }
}

export const actionCreatorAddPost = () => ({type: ADD_POST})
export const actionCreatorUpdateNewPostText = (text) => {
  return (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
  )
} 
export const setUserProfile = (profile) =>{
  return(
    {type: SET_USER_PROFILE, profile}
  )
}

export const profileThunk = (userId) => (dispatch) => {
      ProfileAPI.getProfile(userId).then(data =>
         {
            dispatch(setUserProfile(data));
         })
}
export default profileReducer;