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
            What is Linux and Should You Even Care?
          </h1>
          <div className="flex items-center justify-between mt-10">
            {/* Date */}
            <p>2nd August, 2024</p>
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
            <h2 className="font-bold my-2">Linux in a Nutshell</h2>
            <p>Linux is an open-source, Unix-like operating system kernel. Basically, it's an operating system that's reliable and flexible</p>

            <h2 className="font-bold my-2">To Linux or Not to Linux?</h2>
            <p>Should you switch to Linux? Well, it depends. If you're a gaming addict, stick with Windows - it takes the dub in this case. I mean, you can play Windows games on Linux using Wine (Proton), but that's a whole other can of worms we'll open another day.</p>

            <h3 className="font-semibold my-2">When Linux is Your New Best Friend</h3>
            <p>Switch to Linux if:</p>
            <ul className="my-2">
              <li>• You're into software development</li>
              <li>• You want a PC that's more customizable</li>
              <li>• You're paranoid about security</li>
              <li>• You don't want Microsoft all up in your business (iykyk)</li>
            </ul>

            <h2 className="font-bold my-2">The Linux Distro Jungle</h2>
            <p>Switching to Linux can sometimes be as tiring as explaining memes to your grandma. Why? There are more than 1000 different distributions! Although, only about 20-30 are famous. Let's break down the cool kids of Linux town:</p>

            <h3 className="font-semibold my-2">1. Linux Mint</h3>
            <ul className="my-2">
              <li>• My personal fave for newbies</li>
              <li>• User-friendly and based on Ubuntu</li>
              <li>• Comes with a ton of pre-installed goodies</li>
              <li>• Great UI similar to Windows but better because no auto updates, no blue screen of death (suck it, Microsoft!)</li>
            </ul>

            <h3 className="font-semibold my-2">2. Ubuntu/Debian</h3>
            <ul className="my-2">
              <li>• Linux Mint is Ubuntu's cooler cousin</li>
              <li>• Ubuntu is reliable, rocks GNOME by default</li>
              <li>• Good for beginners, but I still prefer Mint's UI (don't @ me)</li>
            </ul>

            <h3 className="font-semibold my-2">3. Fedora</h3>
            <ul className="my-2">
              <li>• Great for developers and tech nerds</li>
              <li>• Up-to-date software, pretty secure</li>
              <li>• Okay-ish for beginners, good if you're already BFFs with the terminal</li>
            </ul>

            <h3 className="font-semibold my-2">4. Arch</h3>
            <ul className="my-2">
              <li>• Using this gives you ultimate Linux street cred</li>
              <li>• Best distro if you're comfortable with Linux</li>
              <li>• Worst distro if you're just starting out</li>
              <li>• High chance you'll accidentally nuke your system</li>
              <li>• Once installed (hardest installation ever), your mic, Bluetooth, and a bunch of stuff won't work. Good luck fixing that, lmao!</li>
            </ul>

            <h3 className="font-semibold my-2">5. Kali/Parrot</h3>
            <ul className="my-2">
              <li>• Only use these in a virtual machine, unless you're crazy</li>
              <li>• For cybersecurity geeks only</li>
              <li>• They're Debian forks, so just use Debian (Ubuntu) if you're not into hacking stuff</li>
            </ul>

            <h3 className="font-semibold my-2">6. Manjaro</h3>
            <ul className="my-2">
              <li>• For people who want Arch bragging rights without the pain</li>
              <li>• Never used it personally, but users say to just use Arch or Ubuntu, lol</li>
            </ul>

            <h2 className="font-bold my-2">The Grand Finale</h2>
            <p>Some distros are left out, but these are the cool kids. Got questions? Hit me up at mannasnarang8@gmail.com. Stay tuned for a blog on how to run Windows apps/games on Linux. GG, thanks for reading this far, you absolute legend!</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;