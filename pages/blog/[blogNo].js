import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        BlogNo: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.BlogNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const BlogNo = ({ data }) => {
  const router = useRouter();
  const blogNumber = router.query.BlogNo;
  return (
    <div key={data.id}>
      <NavBar />
      <div className="blog-api">
        <h3 className="ssr-styles blog-id">{data.id}</h3>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default BlogNo;
