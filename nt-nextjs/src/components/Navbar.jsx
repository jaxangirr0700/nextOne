import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between w-full">
      {" "}
      <Link href={"/"}> Logo</Link>
      <ul className="flex  gap-3 ">
        <li>
          {" "}
          <Link href={"/about"}> About </Link>
        </li>
        <li>
          {" "}
          <Link href={"/contact"}> Contact </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
