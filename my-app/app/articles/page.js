import Link from "next/link";

export default function Articles() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href={"./posts"} className="">
        <button className="bg-amber-300 text-white px-2 py-2   border-b-white rounded-2xl cursor-pointer flex hover: border-b-amber-800  transition-[0.2] text-shadow-emerald-500 justify-center items-center">
          Take Me To The Post Page
        </button>
      </Link>
    </div>
  );
}
