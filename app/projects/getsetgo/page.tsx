import { Line } from "@/components/common/Line";
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
            <Link href="/projects"><img src="/back-icon.svg" alt="" width={20} height={20}/></Link>
            GetSetGo
          </h1>

          <div className="flex items-center justify-between mt-10">
            {/* Date */}
            <p>24th July, 2024</p>

            {/* Reading time */}
            <div className="flex items-center gap-2">
              <Image
                src="/computer-icon.svg"
                alt="computer icon"
                width={20}
                height={20}
              ></Image>
              <p>Tech Stack :- Flutter, NodeJS, OpenAI API</p>
            </div>
          </div>
          <Line />

        {/* Links */}
        <div>
            <h2>Links :- </h2>
            <ul>
                <li>Website Link <Link href="/" className="text-blue-700">*not deployed*</Link></li>
                <li>Youtube (Demo) <Link href="https://youtu.be/8prWWC1B5uE" className="text-blue-700">click here</Link></li>
                <li>Github <Link href="" className="text-blue-700">click here</Link></li>
            </ul>
        </div>

          <div className="mt-10">
            
            <h1 className="font-bold">Introduction</h1>
            <p className="my-2">
              We are excited to present our new Flutter application that
              revolutionizes how travelers plan their journeys according to
              their budgets. Our app not only helps you pick destinations but
              also emphasizes less explored places to enhance your travel
              experience.
            </p>

            <h2 className="font-bold">Key Features</h2>
            <ul className="my-2">
              <li>Personalized travel itineraries based on budget.</li>
              <li>Recommendations for less explored places.</li>
              <li>Transportation mode suggestions that suit your budget.</li>
            </ul>

            <h2 className="font-bold">Tech Stack</h2>
            <p className="my-2">
              Our app is built using Flutter, a cutting-edge framework by
              Google, which allows us to create a single codebase for both iOS
              and Android. The primary programming language used is Dart,
              selected for its performance and ease of use. Additional tools and
              libraries incorporated include:
            </p>
            <h2 className="font-bold">Conclusion</h2>
            <p className="my-2">
              This app combines innovation with practicality, ensuring that
              users can explore unique travel destinations without stretching
              their budgets. We hope our entry presents a valuable contribution
              to the travel app landscape!
            </p>
          </div>

          {/* Links */}
          
        </section>
      </main>
    </>
  );
};

export default page;
