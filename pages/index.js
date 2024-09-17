import Link from "next/link";
import axios from "axios";
//export async function getServerSideProps() {
// Fetch data from external API
/*  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const repo = await res.json();
  // Pass data to the page via props
  return { props: { repo } }; */
/* console.log("hello");
  return { props: {} }; */
//}

const Index = ({ posts }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio!</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  console.log("loading data");
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;

  return { posts: data };
};
export default Index;
