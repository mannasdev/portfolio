import ThemeToggle from "@/components/common/ThemeToggle";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <ThemeToggle />
      <main className="w-screen h-screen flex flex-col items-center">
        <section className="w-1/2 h-screen max-md:w-3/4">
          {/* Heading */}
          <h1 className="text-3xl mt-8 underline underline-offset-8">
            First Blog
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
        </section>
      </main>
    </>
  );
};

export default page;
