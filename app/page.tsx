import Blog from "@/components/common/Blog";
import { Line } from "@/components/common/Line";
import { Navbar } from "@/components/common/Navbar";
import Project from "@/components/common/Project";
import ThemeToggle from "@/components/common/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <main className="w-screen h-screen flex flex-col items-center">
        <section className="w-1/2 h-screen max-md:w-3/4 ">
          <Navbar />
          <div className="mt-2 text-lg">
            <p>
              -&gt; hi, my name is <b>mannas</b>, i love building stuff using
              typescript and rust <Link href="https://drive.google.com/file/d/17GxMvv_ZvqSdIPj9yKkZr84PQKmuxuxk/view?usp=sharing" className="text-blue-700">click here to get my resume</Link>
            </p>
          </div>
          <Line />
          <div className="text-lg">
            <p>
              -&gt; currently i’m working on using <b>rust</b> on linux embedded
              systems along with making my own os in rust :){" "}
            </p>
          </div>
          <Line />
          <div className="text-lg">
            <div className="flex flex-col gap-4">
              -&gt; social media links :-
              <ul>
                <li>
                  <Link className="" href="https://github.com/mannasdev">&gt;&gt; github - &#123;@<span className="text-blue-700">mannasdev</span>&#125;</Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/mannasnarang/">
                    &gt;&gt; linkedin - &#123;@<span className="text-blue-700">mannasnarang</span>&#125;
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/Mannas5441">
                    &gt;&gt; x.com (twitter) - &#123;@<span className="text-blue-700">Mannas5441</span>&#125;
                  </Link>
                </li>
                <li>
                  <Link href="">
                    &gt;&gt; email - &#123;me@mannas.dev&#125;
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Line />
          <div>
            <h2 className="text-2xl underline-offset-4 underline">
              Latest Project
            </h2>
            <Project
              heading="Clink"
              oneLine="Click is an android app that tokenizes supply chain assets making it easier for logistics manager to track and verify the item"
              skill1="futter"
              skill2="web3"
              skill3="nodejs"
              link="/clink"
            />
          </div>
          <Line />

          <div>
            <h2 className="text-2xl underline-offset-4 underline">
              Latest Blog
            </h2>
            <Blog heading="Linux Tier List" oneLine="what is linux? should you switch to it? and what is the best linux distro" />
          </div>

          <Line />

          <div className="flex flex-col mt-2">
            <h2 className="text-2xl">MORE - </h2>
            <p>
              &gt;&gt;also I’m building project boli where we’re collecting
              metadata and audio data of people who stutter. if you stutter
              while speaking please consider helping us in this research, it
              won’t take more that 5 minutes.
            </p>
            <p>
              Link -&gt;
              <Link
                className="text-blue-700 underline"
                href="https://project-boli.vercel.app"
              >
                {" "}
                project-boli.vercel.app
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
