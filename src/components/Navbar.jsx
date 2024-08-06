"use client";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import React from "react";
import SideBarNav from "./SideBarNav";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    {
      title: "about",
      path: "/about",
    },
    {
      title: "contact",
      path: "/contact",
    },
    {
      title: "portfolio",
      path: "/portfolio",
    },
    {
      title: "blogs",
      path: "/blog",
    },
    {
      title: "categories",
      path: "/categories",
    },
  ];

  const moveToLogin = () => {
    router.push("/login");
  };

  if (pathName.includes("dashboard"))
    return (
      <div className="flex">
        <SideBarNav />
      </div>
    );
  return (
    <div>
      <nav className="flex justify-between gap-12 px-44 py-4 text-xl bg-[#DC143C] text-white">
        <Link href="/">
          <h2 className="text-2xl">Next Hero</h2>
        </Link>
        <ul className="flex justify-center gap-12 items-center">
          {links?.map((link) => (
            <Link
              className={`${
                pathName === link.path && "border-b-4 border-white"
              }`}
              key={link.path}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <button
          onClick={moveToLogin}
          className="btn bg-white text-gray-900 px-4 py-2 rounded-md text-xl font-semibold"
        >
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
