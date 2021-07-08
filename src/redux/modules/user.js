import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { auth } from "../../shared/firebase";
import firebase from "firebase/app";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators

const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    //   로그인 정보를 저장할 위치를 세션으로 바꿔줍니다.
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
      // 이메일과 비밀번호로 로그인합니다.
      auth
        .signInWithEmailAndPassword(id, pwd)
        .then((user) => {
          // 성공한 경우, 유저 정보가 어떻게 오는 지 주석을 풀고 확인해봐요!
          console.log(user);

          //   리덕스에도 유저 정보를 저장해줍니다.
          dispatch(
            setUser({
              user_name: user.user.displayName,
              id: id,
              user_profile: "",
              uid: user.user.uid,
            })
          );

          // 미들웨어에서 페이지 이동하기!
          // 이걸 위해서 configureStore.js에서 뭘 해줬는 지 다시 한 번 확인해보고 오세요!
          history.push("/");
        })
        .catch((error) => {
          // 로그인 실패하면 alert으로 알려줄거예요!
          // 여기에 팝업을 띄워주거나, 왜 실패했는 지 알려주는 등 다른 작업도 해볼 수 있겠죠! :)
          // (시간이 남으면 해보세요!)
          window.alert("로그인 실패!");

          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorCode, errorMessage);
        });
    });
  };
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {
        console.log(user);

        auth.currentUser
          .updateProfile({
            displayName: user_name,
          })
          .then(() => {
            dispatch(
              setUser({ user_name: user_name, id: id, user_profile: "" })
            );
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });

        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ..
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  getUser,
  logOut,
  signupFB,
  loginFB,
};

export { actionCreators };
