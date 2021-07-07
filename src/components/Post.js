import React from "react";

const Post = (props) => {
  return (
    <React.Fragment>
      <div>
        user_profile/ user_name / insert_dt / is_me
      </div>
      <div>
        image
      </div>
      <div>
        contents
      </div>
      <div>
        comment_cnt
      </div>
    </React.Fragment>
  )
}

Post.defaultProps = {
  user_info: {
    user_name: "51k.co.kr",
    user_profile: ""
  },
  image_url: "",
  contents: "잡지 내용",
  comment_cnt: 1,
  insert_dt: "2021-07-14",
};

export default Post;