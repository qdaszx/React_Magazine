import React from "react";
import Text from "../elements/Text";
import Grid from "../elements/Grid";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

const Login = (props) => {

  const Login = (props) => {
    const [id, setId] = React.useState('');
    const [pwd, setPwd] = React.useState('');

    const changeId = (e) => {
        setId(e.target.value);
    }

    const changePwd = (e) => {
        setPwd(e.target.value);
    }

    const login = () => {
        setCookie("user_id", id, 3);
        setCookie("user_pwd", pwd, 3);
    }
  return (
    <Grid bg="#EEEDE7" padding="16px">
      <Text size="30px" bold>
        로그인
      </Text>

      <Grid padding="16px 0px">
        <Input label="아이디" placeholder="아이디를 입력해주세요" />
      </Grid>
      <Grid padding="16px 0px">
        <Input label="비밀번호" placeholder="비밀번호를 입력해주세요" />
      </Grid>
      <Grid margin="20px 0px">
        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인 완료");
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Login;
