import React from "react";
import Link from "next/link";
import Head from "next/head";

export const MainLayout = ({ title = "Next.js Application", children }) => {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name={"keywords"} content={"next, javascript, nextjs, react"} />
        <meta name={"description"} content={"this is a tutorial"} />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href={"/posts"}>
              <a>Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <style jsx global>
        {`
          nav {
            position: fixed;
            height: 60px;
            top: 0px;
            left: 0px;
            right: 0px;
            background: darkblue;
          }
          nav ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          nav a {
            color: white;
            text-decoration: none;
          }
          main {
            padding: 60px 1rem 0;
          }
        `}
      </style>
    </>
  );
};
