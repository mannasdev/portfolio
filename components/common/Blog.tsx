"use client";

import Link from "next/link";

const Blog = ({ heading, oneLine, link }: any) => {
  return (
    <div className="border-black w-full h-auto mt-7 rounded-2xl border-2 flex flex-col justify-between px-3">
      <h1 className="text-2xl p-2">&gt;&gt; {heading}</h1>
      <div className="flex items-center justify-between">
        <p className="text-sm p-2">{oneLine} </p>
        <span className="text-sm text-blue-700">
          <Link href={`/blogs${link}`}>click here to read more</Link>
        </span>
      </div>
    </div>
  );
};

export default Blog;
