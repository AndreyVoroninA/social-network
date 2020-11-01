import {ProfileAPI} from './../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = "SET_STATUS";

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
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
   
   switch (action.type) {
      case ADD_POST:
         {
            let newPost = {
              id: 1,
              message: action.newPostText,
              imgsrc:
                "http://drasler.ru/wp-content/uploads/2019/01/kirill-zakirov-liliia-smirnova-litso-ochki-dlinnye-volosy-be.jpg",
              likesCount: 0,
            };

            return {
              ...state,
              posts: [...state.posts, newPost],
            }
          }; 

   case SET_USER_PROFILE:
     {
       return {...state, profile: action.profile}
     };

     case SET_STATUS:
       {
         return {...state, status: action.status}
       }
   default: return state;
  }
}
//action creators//
export const actionCreatorAddPost = (newPostText) => ({type: ADD_POST, newPostText})

export const setUserProfile = (profile) =>{
  return(
    {type: SET_USER_PROFILE, profile}
  )
}
export const setStatus = (status) => ({type: SET_STATUS, status})
//Thunks//
export const profileThunk = (userId) => (dispatch) => {
      ProfileAPI.getProfile(userId).then(data =>
         {
            dispatch(setUserProfile(data));
         });
}
export const getStatus = (userId) => (dispatch) => {
  ProfileAPI.getStatus(userId).then(response => 
    {
      dispatch(setStatus(response.data))
    });
}
export const updateStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  });
}

export default profileReducer;