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
            <Link href="/blogs">
              <img src="/back-icon.svg" alt="" width={20} height={20} />
            </Link>
            My LinkedIn got hacked
          </h1>

          <div className="flex items-center justify-between mt-10">
            {/* Date */}
            <p>25th September, 2024</p>

            {/* Reading time */}
            <div className="flex items-center gap-2">
              <Image
                src="/clock-icon.svg"
                alt="clock icon"
                width={20}
                height={20}
              ></Image>
              <p> Reading time :- 8 mins</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-bold my-2">Linkedin? why would anyone want to hack it?</h2>
            <p>
              Three days ago, a WhatsApp notification revealed a hack on an Instagram account. The hacker had posted a story with a malicious link - a crypto scam. Swift action to change the password and delete the story resolved the immediate issue. Concerns about other accounts being compromised were minimal, thanks to the practice of using unique passwords for each platform.

              In retrospect, the absence of two-factor authentication (2FA) on social media apps like Instagram and LinkedIn was a significant oversight. Despite awareness of 2FA's importance, it hadn't been implemented - a mistake to be rectified promptly.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-4">
              <Image
                src="/1.png"
                alt="Instagram hack illustration"
                width={300}
                height={200}
                className="rounded-md w-full md:w-auto"
              />
              <Image
                src="/2.png"
                alt="Two-factor authentication illustration"
                width={300}
                height={200}
                className="rounded-md w-full md:w-auto"
              />
            </div>
            <br />
            <p>
              I spent the entire day to figure out how my instagram got hacked.
              I wasnt able to find any solution. So I just assumed it was done by some bot.
              Day before yesterday, I had recieved a gmail message in chinese from linkedin, I can't read hindi let alone reading chinese. 
              I opened linkedin just to make sure that it wasn't hacked and hoped the mail was just a stupid phishing link
            </p>
            <br />
            <p>
              I was wrong, it wasnt a phishing link. It was a legitimate mail from linkedin saying that someone from virginia tried to login to my account.
              My name was changed to a chinese name and pfp was changed to a random chinese girl's pic.
              everything in my profile was changed, my bio, my experiences, my education, my skills.
              And to top it all off, the fucking hacker sent 100+ dms to random people to connect? like not even trying to market something, just wanting to connect
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-4">
              <Image
                src="/4.jpg"
                alt="Instagram hack illustration"
                width={300}
                height={200}
                className="rounded-md w-full md:w-auto"
              />
              <Image
                src="/3.jpg"
                alt="Two-factor authentication illustration"
                width={300}
                height={200}
                className="rounded-md w-full md:w-auto"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
