"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTheme } from 'next-themes';

export const Navbar = ({ props }: any) => {
  const path = usePathname();
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <nav className="border-black dark:border-white w-full h-auto mt-7 rounded-2xl border-2 flex items-center justify-between px-3 sticky transition-opacity top-3 z-10 bg-white dark:bg-gray-800">
      <div
        className="flex flex-col items-center p-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src={theme === 'dark' ? "/home-icon-dark.svg" : "/home-icon.svg"}
          alt="home icon"
          height={30}
          width={30}
        />
        <p
          className={`text-sm ${path == "/" ? "underline" : ""}`}
        >
          Home
        </p>
      </div>
      <div
        className="flex flex-col items-center p-2 cursor-pointer"
        onClick={() => router.push("/blogs")}
      >
        <Image
          src={theme === 'dark' ? "/book-icon-dark.svg" : "/book-icon.svg"}
          alt="book icon"
          height={30}
          width={30}
        />
        <p
          className={`text-sm ${
            path == "/blogs" ? "underline" : ""
          }`}
        >
          Blogs
        </p>
      </div>
      <div
        className="flex flex-col items-center p-2 cursor-pointer"
        onClick={() => router.push("/projects")}
      >
        <Image
          src={theme === 'dark' ? "/robot-icon-dark.svg" : "/robot-icon.svg"}
          alt="robot icon"
          height={30}
          width={30}
        />
        <p
          className={`text-sm ${
            path == "/projects" ? "underline" : ""
          }`}
        >
          Projects
        </p>
      </div>
      <div
        className="flex flex-col items-center p-2 cursor-pointer"
        onClick={() => router.push("/about-me")}
      >
        <Image
          src={theme === 'dark' ? "/user-icon-dark.svg" : "/user-icon.svg"}
          alt="user icon"
          height={30}
          width={30}
        />
        <p
          className={`text-sm ${
            path == "/about-me" ? "underline" : ""
          }`}
        >
          About me
        </p>
      </div>
    </nav>
  );
};
