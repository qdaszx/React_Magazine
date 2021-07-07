import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Image shape="circle"></Image>
        </Grid>
        <Grid>
          <Image shape="rectangle"></Image>
        </Grid>
        <Grid padding="16px">
          <div>contents</div>
        </Grid>
        <Grid padding="16px">
          <div>comment_cnt</div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "51k.co.kr",
    user_profile: "",
  },
  image_url: "",
  contents: "잡지 내용",
  comment_cnt: 1,
  insert_dt: "2021-07-14",
};

export default Post;
