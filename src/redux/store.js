import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

let store = {
  _callSubscriber () {
    console.log("state changed");
  },
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Андрей", ava: "https://i.pinimg.com/736x/b3/fe/2a/b3fe2a2b1defcf802e264337797eaaab.jpg"},
        { id: 2, name: "Валек", ava: "https://pristor.ru/wp-content/uploads/2018/08/%D0%9A%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B8-%D1%81%D0%B0%D0%BC%D1%8B%D0%B5-%D0%BD%D0%B5%D0%BE%D0%B1%D1%8B%D1%87%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%86%D0%B0%D0%BD%D0%BE%D0%B2-%D0%B8-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9-7.jpg" },
        { id: 3, name: "Артем", ava: "https://avatars.mds.yandex.net/get-pdb/1004345/f795977b-4fde-4176-a87f-4f0acba543e8/s1200?webp=false" },
        { id: 4, name: "Ярик", ava: "https://pristor.ru/wp-content/uploads/2019/09/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%92%D0%9A-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%86%D0%B0%D0%BD%D0%BE%D0%B2002.jpg" },
        { id: 5, name: "Серега", ava: "https://sun3-13.userapi.com/-KvDyTnUatpMjTR6VWzNDY1bEHPVivXz2_-7qw/hJaBIvdJ-cc.jpg" },
      ],
  
      messagesData: [
        {
          id: 1,
          message:
            "Привет! У меня есть ценная информация по поводу front-end разработки. Нужно??",
        },
        { id: 2, message: "Привет, Серёга! Сейчас занят, но ссылку жду" },
        { id: 3, message: "Океей, через пару минут кину!" },
        { id: 4, message: "Когда свой проект-то закончишь?" },
      ],
      newMesText: "Soon",
    },
  },
  getState () {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },
  dispatch (action) {
    
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
  }
}

window.store = store;
export default store;
