import { Navbar } from "@/components/common/Navbar";
import ThemeToggle from "@/components/common/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <ThemeToggle />
      <main className="w-screen h-screen flex flex-col items-center">
        <section className="w-1/2 h-screen max-md:w-3/4">
          <Navbar />
          <div className="flex gap-2 mt-5 max-md:flex-col">
            <img
              src="/me.jpg"
              alt="Mannas photo"
              className="rounded-xl h-48 w-auto max-md:h-auto max-md:w-48"
            />
            <p className="text-sm">
              I'm Mannas, a 19yo developer currently pursuing a bachelors degree
              in data science and artificial intelligence from IITG. I started
              coding at 12yo where I participated in a robotics competition
              called FLL (first lego league) I later participated in another
              robotics competition called GRC. I won positions in both the
              competitions. I later started exploring proper coding during covid
              when I learn javascript and built numerous websites. in 2022 I
              also shifted to making games in Unity using c# for some brief
              time. I started uploading youtube videos where I made silly games
              :)
            </p>
          </div>
          <p className="text-sm mt-4">
            cut to 2023, I started learning full stack web development. I
            started doing freelancing where I made websites for numerous client.
            During my early days in learning javascript I also got into web3,
            etheruem smart contract development using solidity
          </p>
          <p className="text-sm mt-4">
            2024 &gt;&gt; I started learning Rust. I'm also open for part time
            positions or contract projects (hmu at mannasnarang8@gmail.com)
          </p>
          <p className="text-sm mt-4">
            Checkout my projects and blogs :) for a list of all my hosted
            projects visit{" "}
            <Link href="https://mns.lol" className="text-blue-700 underline">
              mns.lol
            </Link>
          </p>
        </section>
      </main>
    </>
  );
};

export default page;
