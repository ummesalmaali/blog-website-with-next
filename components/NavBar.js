import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="menu-bar">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/blog">About us</Link>
          </li>
          <li>
            <Link href="/product">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
