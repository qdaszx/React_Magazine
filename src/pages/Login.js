import React from "react";
import Text from "../elements/Text";
import Grid from "../elements/Grid";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { emailCheck } from "../shared/common";

const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

    // id가 이메일 형식이 맞나 확인!
    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    dispatch(userActions.loginFB(id, pwd));
  };
  return (
    <Grid bg="#EEEDE7" padding="16px">
      <Text size="30px" bold>
        로그인
      </Text>

      <Grid padding="16px 0px">
        <Input
          label="아이디"
          placeholder="아이디를 입력해주세요"
          _onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </Grid>
      <Grid padding="16px 0px">
        <Input
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          _onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
      </Grid>
      <Grid margin="20px 0px">
        <Button
          _onClick={() => {
            login();
          }}
        >
          로그인하기
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
