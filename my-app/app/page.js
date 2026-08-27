import Link from "next/link";
import "./app.css";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex relative flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Link href={"/articles"}>
        <button className="flex bg-red-500 px-10 py-5 rounded-2xl baker">
          Baker Hallak
        </button>
        <Suspense></Suspense>
      </Link>
    </div>
  );
}
