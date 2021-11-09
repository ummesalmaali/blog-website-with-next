import { useRouter } from "next/router";
const blogNo = () => {
  const router = useRouter;
  const blogNumber = router.query.blogNo;
  return (
    <div>
      <h3>so here the dynamic router{blogNumber} </h3>
    </div>
  );
};

export default blogNo;
