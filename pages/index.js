import Link from "next/link";
import NavBar from "../components/NavBar";
const index = () => {
  return (
    <>
      <NavBar />

      <header className="header">
        <div className="brand_box"></div>
        <div className="text_box">
          <h1 className="heading_primary">
            <span className="heading_primary_main">
              Welcome to the world of Reactjs
            </span>
            <span>Love with javascript</span>
          </h1>
          <a
            href="#"
            className="btn btn_white btn_white btn_animation umme_text"
          >
            TechTalent BD Official
          </a>
        </div>
      </header>
    </>
  );
};

export default index;
