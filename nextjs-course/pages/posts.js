import { MainLayout } from "../components/MainLayout";
import Link from "next/link";

export default function Posts() {
  return (
    <MainLayout title={"About page"}>
      <h1>Posts page</h1>
      <Link href={"post/333"}>
        <a>Post 333</a>
      </Link>
    </MainLayout>
  );
}
