//import { withRouter } from "next/router";
import axios from "axios";

/* const Post = withRouter((props) => {
  return (
    <div>
      <h1>post {props.router.query.id}</h1>
    </div>
  );
}); */

const Post = ({ query, comments }) => {
  return (
    <div>
      <h1>Comments for Post #{query.id}</h1>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};

const Comment = ({ name, body }) => (
  <div>
    <h2>{name}</h2>
    <p>{body}</p>
  </div>
);

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;

  return { query, comments: data };
};

export default Post;
