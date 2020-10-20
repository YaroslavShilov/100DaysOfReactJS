import Link from "next/link";
import React from "react";
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout title={"Index page"}>
      <h1>Hello Next.JS!</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/about/author">
          <a>Author</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
    </MainLayout>
  );
}
