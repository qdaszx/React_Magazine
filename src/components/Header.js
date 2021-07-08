import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Image from "../elements/Image";
import Button from "../elements/Button";
import { getCookie, deleteCookie } from "../shared/Cookie";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { apiKey } from "../shared/firebase";
import { history } from "../redux/configureStore";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key);
  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px" bg="#EEEDE7">
          <Grid>
            <Text size="40px" bold margin="0px">
              헬스타그램
            </Text>
            {/* <Image shape="logo" size="70px" /> */}
          </Grid>
          <Grid is_flex>
            <Button text="내정보" />
            <Button text="알림" />
            <Button
              text="로그아웃"
              _onClick={() => {
                dispatch(userActions.logOut({}));
                history.push("/");
              }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px" bg="#EEEDE7">
        <Grid>
          <Text size="40px" bold margin="0px">
            헬스타그램
          </Text>
          {/* <Image shape="logo" size="70px" /> */}
        </Grid>
        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
              history.push("/login");
            }}
          />
          <Button
            text="회원가입"
            _onClick={() => {
              history.push("/signup");
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
