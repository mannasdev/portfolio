"use client"

import ThemeToggle from "@/components/common/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  return (
    <>
      <ThemeToggle />
      <main className="w-screen h-screen flex flex-col items-center">
        <section className="w-1/2 h-screen max-md:w-3/4">
          {/* Heading */}
          <h1 className="text-3xl mt-8 underline underline-offset-8 flex items-center gap-2">
            <Link href="/blogs">
              <img src="/back-icon.svg" alt="" width={20} height={20} />
            </Link>
            DareIT - post and participate in challenges
          </h1>

          <div className="flex items-center justify-between mt-10">
            {/* Date */}
            <p>29th July, 2024</p>

            {/* Reading time */}
            <div className="flex items-center gap-2">
              <Image
                src="/clock-icon.svg"
                alt="clock icon"
                width={20}
                height={20}
              ></Image>
              <p> Reading time :- 3 mins</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold my-2">What is Dareit?</h2>
            <p>
              Around 6 weeks ago I participated in{" "}
              <Link href="https://buildspace.so" className="underline">
                buildspace - nights & weekends
              </Link>{" "}
              where I decided to make a platform that enables users to post and
              participate in challenges. for example :- your friend decided that
              he'll regularly go to gym, there is a very high chance that he
              quits midway because of "lack of motivation", now imagine a
              platform existed where he creates a challenge and then nudges you
              to join, now you both are more likely to go to gym. That was the
              overall idea of this fun project
            </p>
            <h2 className="text-2xl font-bold my-2">
              It has been more than 6 weeks, where tf is the platform?
            </h2>
            <p>
              I'm sorry, I kinda got busy. I was working on{" "}
              <Link
                href="https://project-boli.vercel.app"
                className="underline"
              >
                Project Boli (Internship)
              </Link>{" "}
              but, I'm back. Honestly, I always wanted such a website. This is
              just a fun project for me not a startup idea :). I mean I would
              love if people will use it, at the end of the day who doesn't like
              users ?
            </p>
            <h2 className="text-2xl font-bold my-2">Let's fucking go</h2>
            <p>
              If the idea sounds interesting to you, join the waitlist{" "}
              <Link href="https://dareit.mns.lol" className="underline">
                Dareit
              </Link>
            </p>
            
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
