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
              <img src="/back-icon.svg" alt="" width={20} height={20}/>
            </Link>
            The Journey of India's Space Program: From Aryabhata to Chandrayaan
          </h1>

          <div className="flex items-center justify-between mt-10">
            {/* Date */}
            <p>23th August, 2024</p>

            {/* Reading time */}
            <div className="flex items-center gap-2">
              <Image
                src="/clock-icon.svg"
                alt="clock icon"
                width={20}
                height={20}
              ></Image>
              <p>Reading time: 6 mins</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-bold my-2">Introduction</h2>
            <ul>
              <li>India's space program has evolved into one of the most successful and cost-effective globally.</li>
              <li>The journey from Aryabhata to Chandrayaan missions reflects India's dedication to space exploration.</li>
            </ul>

            <h2 className="font-bold my-4">The Beginning: Aryabhata (1975)</h2>
            <ul>
              <li>Launched on April 19, 1975, Aryabhata was India's first satellite.</li>
              <li>Named after an ancient Indian mathematician, it marked India's entry into space.</li>
              <li>Despite technical challenges, it laid the foundation for future endeavors.</li>
            </ul>

            <h2 className="font-bold my-4">The Rohini Satellite Series and SLV-3 (1980)</h2>
            <ul>
              <li>The Rohini series marked a significant step with India's first indigenously launched satellite, Rohini-1.</li>
              <li>Launched by SLV-3 on July 18, 1980, it demonstrated India's growing satellite technology capabilities.</li>
            </ul>

            <h2 className="font-bold my-4">Expansion and Growth: The INSAT and IRS Series (1983-Present)</h2>
            <ul>
              <li>INSAT, launched in 1983, supported telecommunications, broadcasting, and meteorology.</li>
              <li>The IRS series provided crucial data for agriculture, forestry, and disaster management.</li>
            </ul>

            <h2 className="font-bold my-4">PSLV: The Workhorse of ISRO (1993-Present)</h2>
            <ul>
              <li>First launched in 1993, PSLV became ISRO's most reliable launch vehicle.</li>
              <li>It set a world record by launching 104 satellites in a single mission in 2017.</li>
            </ul>

            <h2 className="font-bold my-4">GSLV and Cryogenic Technology (2001-Present)</h2>
            <ul>
              <li>GSLV enabled India to launch heavier payloads into geostationary orbits.</li>
              <li>Indigenous cryogenic technology was successfully tested in 2014.</li>
            </ul>

            <h2 className="font-bold my-4">Chandrayaan-1: India's First Mission to the Moon (2008)</h2>
            <ul>
              <li>Launched on October 22, 2008, Chandrayaan-1 was India's first lunar mission.</li>
              <li>It discovered water molecules on the Moon's surface.</li>
            </ul>

            <h2 className="font-bold my-4">Mars Orbiter Mission (Mangalyaan) (2013)</h2>
            <ul>
              <li>Launched on November 5, 2013, Mangalyaan reached Mars orbit on September 24, 2014.</li>
              <li>India became the first country to succeed in its maiden Mars mission.</li>
            </ul>

            <h2 className="font-bold my-4">Chandrayaan-2: The Next Leap (2019)</h2>
            <ul>
              <li>Launched on July 22, 2019, Chandrayaan-2 aimed to land on the Moon's South Pole.</li>
              <li>The orbiter continues to send valuable data despite the lander losing communication.</li>
            </ul>

            <h2 className="font-bold my-4">Chandrayaan-3: A HUGE SUCCESS</h2>
            <ul>
              <li>Launched on 14th July, 2023. Chandrayaan 3 aimed to achieve the same task as chandrayaan 2</li>
              <li>It successfully completed its mission on 23th August, 2023 by soft landing on the moon surface</li>
            </ul>

            <h2 className="font-bold my-4">The Future: Gaganyaan and Beyond</h2>
            <ul>
              <li>ISRO plans to launch Gaganyaan, India's first manned space mission.</li>
              <li>Future plans include a space station and interplanetary missions to Venus and beyond.</li>
            </ul>

            <p>India's space journey from Aryabhata to Chandrayaan is a story of determination, innovation, and vision. As the nation looks to the stars, the future of India's space program holds endless possibilities and exciting adventures.</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
