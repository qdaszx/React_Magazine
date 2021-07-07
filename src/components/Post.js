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
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle"></Image>
        </Grid>
        <Grid padding="16px">
          <Text bold>오늘은 날씨가 선선하니 걷기 딱 좋은 날씨네</Text>
        </Grid>
        <Grid padding="16px">
          <Text>댓글 10개</Text>
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
