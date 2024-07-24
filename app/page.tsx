import { Line } from "@/components/common/Line";
import { Navbar } from "@/components/common/Navbar";
import ThemeToggle from "@/components/common/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
     <ThemeToggle />
    <main className="w-screen h-screen flex flex-col items-center">
      <section className="w-1/2 h-screen max-md:w-3/4">
        <Navbar />
        <div className="mt-2 text-lg">
          <p>
            -&gt; hi, my name is <b>mannas</b>, i love building stuff using
            typescript and rust
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
              <li><Link href="">&gt;&gt; github - &#123;@mannasdev&#125;</Link></li>
              <li><Link href="">&gt;&gt; instagram - &#123;@mannas_24&#125;</Link> </li>
              <li><Link href="">&gt;&gt; linkedin - &#123;@mannasnarang&#125;</Link></li>
              <li><Link href="">&gt;&gt; x.com (twitter) - &#123;@_mannas&#125;</Link></li>
              <li><Link href="">&gt;&gt; email - &#123;mannasnarang8@gmail.com&#125;</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
