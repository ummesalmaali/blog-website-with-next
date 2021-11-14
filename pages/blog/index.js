import React from "react";
import NavBar from "../../components/NavBar";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
const index = ({ data }) => {
  return (
    <div>
      <NavBar />
      {data.slice(0, 5).map((curElem) => {
        return (
          <div className="blog-api" key={curElem.id}>
            <h3 className="ssr-styles blog-id">{curElem.id}</h3>
            <Link href={`/blog/${curElem.id}`}>
              <h2>{curElem.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default index;
