import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/")}>Back to Home page</button>
    </div>
  );
};

export default ErrorPage;
