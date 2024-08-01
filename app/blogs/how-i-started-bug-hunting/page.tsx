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
                        <Link href="/blogs"><img src="/back-icon.svg" alt="" width={20} height={20} /></Link>
                        The Accidental Hacker
                    </h1>

                    <div className="flex items-center justify-between mt-10">
                        {/* Date */}
                        <p>1st August, 2024</p>

                        {/* Reading time */}
                        <div className="flex items-center gap-2">
                            <Image
                                src="/clock-icon.svg"
                                alt="clock icon"
                                width={20}
                                height={20}
                            ></Image>
                            <p> Reading time :- 7 mins</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="font-bold my-2">The Accidental Hacker</h2>
                        <p>You know how sometimes life takes you down a path you never expected? That's pretty much how I stumbled into the world of cybersecurity and bug exploitation. It all started about five years ago with a simple goal: I just wanted to play Counter-Strike on my ancient PC.</p>

                    </div>
                    <div className="mt-5">
                        <h2 className="font-bold my-2">The Wi-Fi Heist</h2>
                        <p>The problem? No Wi-Fi at home and no phone for mobile data. Teenage me had a brilliant (probably illegal) solution - hack into the neighbor's Wi-Fi to download the massive 12 GB game. Looking back, I can't believe I actually went through with it.</p>

                    </div>
                    <div className="mt-5">
                        <h2 className="font-bold my-2">Learning the Ropes</h2>
                        <p>So there I was, a clueless 14-year-old, trying to figure out how to hack Wi-Fi. YouTube tutorials were shit - seriously, don't trust those. After some digging around, I came across blogs talking about this thing called aircrack-ng. Before I knew it, I was buying a Wi-Fi adapter for my laptop and diving headfirst into the world of hacking.</p>
                    </div>
                    <div className="mt-5">
                        <h2 className="font-bold my-2">The First Hack</h2>
                        <p>It took a bunch of failed attempts, but man, when I finally cracked that Wi-Fi password? The rush was unreal. Every second felt like I was in some high-tech spy movie. Without realizing it, I was picking up all sorts of tech knowledge along the way. I even taught myself assembly language</p>
                    </div>
                    <div className="mt-5">
                        <h2 className="font-bold my-2">Going All In: The Linux Plunge</h2>
                        <p>Riding that hacking high, I made what seemed like a totally reasonable decision at the time: I wiped my entire Windows system and installed Kali Linux. Let me tell you, that first Linux install was a nightmare. Now? I do it weekly for fun. Who needs Windows updates when you can just start fresh every week, right?</p>
                    </div>
                    <div className="mt-5">
                        <h2 className="font-bold my-2">Capture The Flag: The Ultimate Digital Puzzle</h2>
                        <p>Recently, I've gotten back into the cybersecurity game with Capture The Flag (CTF) challenges. It's basically ethical hacking - you break into systems designed to be hacked. It's like the ultimate digital puzzle, and the thrill of finding that one vulnerability is addictive.</p>
                    </div>
                    <div className="mt-5">
                        <h2 className="font-bold my-2">Back to Basics: Assembly Adventures</h2>
                        <p>I've also been diving back into assembly programming. It's mind-bending stuff, but there's something weirdly satisfying about working with such a low-level language. Who knew staring at what looks like gibberish could be so rewarding?</p>
                    </div>
                    <div className="mt-5">
                        <h2 className="font-bold my-2">The Road Ahead</h2>
                        <p>So yeah, that's where I'm at now. Getting pretty decent at this hacking thing, if I do say so myself. Who knows, maybe I'm already in your system... Kidding! (Or am I?) Stay safe out there in the digital wild west, folks. And seriously, update those passwords!</p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default page;
