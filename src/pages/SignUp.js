import React from "react";
import Text from "../elements/Text";
import Grid from "../elements/Grid";
import Input from "../elements/Input";
import Button from "../elements/Button";

const SignUp = (props) => {
  const {} = props;
  return (
    <Grid bg="#EEEDE7" padding="16px">
      <Text size="30px" bold>
        회원가입
      </Text>

      <Grid padding="16px 0px">
        <Input label="아이디" placeholder="아이디를 입력해주세요" />
      </Grid>
      <Grid padding="16px 0px">
        <Input label="닉네임" placeholder="닉네임를 입력해주세요" />
      </Grid>
      <Grid padding="16px 0px">
        <Input label="비밀번호" placeholder="비밀번호를 입력해주세요" />
      </Grid>
      <Grid padding="16px 0px">
        <Input
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
        />
      </Grid>
      <Grid margin="20px 0px">
        <Button
          text="회원가입하기"
          _onClick={() => {
            console.log("회원가입 완료");
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SignUp;
