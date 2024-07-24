"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export const Navbar = ({ props }: any) => {
  const path = usePathname();
  const router = useRouter();

  return (
    <nav className="border-black w-full h-auto mt-7 rounded-2xl border-2 flex items-center justify-between px-3 sticky transition-opacity top-3 z-10 bg-white">
      <div
        className="flex flex-col items-center p-2"
        onClick={() => router.push("/")}
      >
        <Image
          src="/home-icon.svg"
          alt="home icon"
          height={30}
          width={30}
        ></Image>
        <p
          className={`text-sm ${path == "/" ? "underline" : ""} cursor-pointer`}
        >
          Home
        </p>
      </div>
      <div
        className="flex flex-col items-center p-2"
        onClick={() => router.push("/blogs")}
      >
        <Image
          src="/book-icon.svg"
          alt="book icon"
          height={30}
          width={30}
        ></Image>
        <p
          className={`text-sm ${
            path == "/blogs" ? "underline" : ""
          } cursor-pointer`}
        >
          Blogs
        </p>
      </div>
      <div
        className="flex flex-col items-center p-2"
        onClick={() => router.push("/projects")}
      >
        <Image
          src="/robot-icon.svg"
          alt="robot icon"
          height={30}
          width={30}
        ></Image>
        <p
          className={`text-sm ${
            path == "/projects" ? "underline" : ""
          } cursor-pointer`}
        >
          Projects
        </p>
      </div>
      <div
        className="flex flex-col items-center p-2"
        onClick={() => router.push("/about-me")}
      >
        <Image
          src="/user-icon.svg"
          alt="user icon"
          height={30}
          width={30}
        ></Image>
        <p
          className={`text-sm ${
            path == "/about-me" ? "underline" : ""
          } cursor-pointer`}
        >
          About me
        </p>
      </div>
    </nav>
  );
};
