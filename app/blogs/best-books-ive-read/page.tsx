import ThemeToggle from "@/components/common/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <ThemeToggle />
      <main className="w-screen h-screen flex flex-col items-center">
        <section className="w-1/2 h-screen max-md:w-3/4">
          {/* Heading */}
          <h1 className="text-3xl mt-8 underline underline-offset-8 flex items-center gap-2">
          <Link href="/blogs"><img src="/back-icon.svg" alt="" width={20} height={20}/></Link>
            Best Books I hav
          </h1>

          <div className="flex items-center justify-between mt-10">
            {/* Date */}
            <p>24th July, 2024</p>

            {/* Reading time */}
            <div className="flex items-center gap-2">
              <Image
                src="/clock-icon.svg"
                alt="clock icon"
                width={20}
                height={20}
              ></Image>
              <p> Reading time :- 5 mins</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-bold my-2">Welcome to My Blog!</h2>
            <p>Hello everyone! Welcome to my first blog post. I am excited to start this journey where I will be sharing all my readings and views on various topics. This blog will serve as a repository of my thoughts, insights, and reflections.</p>
            <p className="my-2">Here’s what you can expect:</p>
            <ul className="my-2">
                <li>&gt;&gt; Book reviews and summaries</li>
                <li>&gt;&gt; Personal reflections on different subjects</li>
                <li>&gt;&gt; Analysis of current events</li>
                <li>&gt;&gt; And much more!</li>
            </ul>
            <p>Stay tuned for more updates, and feel free to share your thoughts and feedback. Let’s embark on this journey of knowledge and discovery together!</p>
            <p>Happy reading!</p>
        </div>
        </section>
      </main>
    </>
  );
};

export default page;
