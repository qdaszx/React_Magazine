import React from "react";
import Text from "../elements/Text";
import Grid from "../elements/Grid";
import Input from "../elements/Input";
import Button from "../elements/Button";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");
  const signup = () => {
    if (id === "" || pwd === "" || user_name === "") {
      return;
    }

    if (pwd !== pwd_check) {
      return;
    }

    dispatch(userActions.signupFB(id, pwd, user_name));
  };
  return (
    <Grid bg="#EEEDE7" padding="16px">
      <Text size="30px" bold>
        회원가입
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
          label="닉네임"
          placeholder="닉네임를 입력해주세요"
          _onChange={(e) => {
            setUserName(e.target.value);
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
      <Grid padding="16px 0px">
        <Input
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
          type="password"
          _onChange={(e) => {
            setPwdCheck(e.target.value);
          }}
        />
      </Grid>
      <Grid margin="20px 0px">
        <Button
          text="회원가입하기"
          _onClick={() => {
            console.log("회원가입 완료");
            signup();
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SignUp;
