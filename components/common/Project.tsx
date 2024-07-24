"use client";

import Link from "next/link";

const Project = ({ heading, oneLine, skill1, skill2, skill3, link }: any) => {
  return (
    <div className="border-black w-full h-auto mt-7 rounded-2xl border-2 flex flex-col justify-between px-3">
      <h1 className="text-2xl p-2">&gt;&gt; {heading}</h1>
      <div className="flex items-center justify-between">
        <p className="text-sm p-1">{oneLine} </p>

        <span className="text-sm text-blue-700">
          <Link href={`/projects/${link}`}>click here to know more</Link>
        </span>
      </div>
      <div className="w-1/2 flex gap-3 py-2">
        <div className="bg-gray-200 h-auto w-auto rounded-md p-1">{skill1}</div>
        <div className="bg-gray-200 h-auto w-auto rounded-md p-1">{skill2}</div>
        <div className="bg-gray-200 h-auto w-auto rounded-md p-1">{skill3}</div>
      </div>
    </div>
  );
};

export default Project;
