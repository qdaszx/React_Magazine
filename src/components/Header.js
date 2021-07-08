import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Image from "../elements/Image";
import Button from "../elements/Button";
import { getCookie, deleteCookie } from "../shared/Cookie";

const Header = (props) => {
  const [is_login, setIsLogin] = React.useState(false);
  React.useEffect(() => {
    let cookie = getCookie("user_id");
    console.log(cookie);
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });
  if (is_login) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px" bg="#EEEDE7">
          <Grid>
            <Image shape="logo" size="70px" />
          </Grid>
          <Grid is_flex>
            <Button text="내정보" />
            <Button text="알림" />
            <Button
              text="로그아웃"
              _onClick={() => {
                deleteCookie("user_id");
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
          <Image shape="logo" size="70px" />
        </Grid>
        <Grid is_flex>
          <Button text="로그인" />
          <Button text="회원가입" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
