import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Image from "../elements/Image";
import Button from "../elements/Button";

const Header = (props) => {
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
