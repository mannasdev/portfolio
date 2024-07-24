import Blog from "@/components/common/Blog";
import { Navbar } from "@/components/common/Navbar";
import Project from "@/components/common/Project";
import ThemeToggle from "@/components/common/ThemeToggle";

const page = () => {
  return (
    <>
      <ThemeToggle />
      <main className="w-screen h-screen flex flex-col items-center">
        <section className="w-1/2 h-screen max-md:w-3/4">
          <Navbar />
          <div className="flex items-center justify-between">
            <h2 className="text-3xl mt-3">&gt;&gt; Projects</h2>
            <div className="flex items-center mt-auto gap-2">
              <p>Search</p>
              <input
                type="text"
                className="border border-black mt-auto rounded-md text-md p-1"
              />
            </div>
          </div>
          <Project
            heading={"GetSetGo"}
            oneLine={
              "AI Travel recommendation website that recommends the best iternary according to your budget"
            }
            skill1={"nodejs"}
            skill2={"mongodb"}
            skill3={"nextjs"}
            link={"/getsetgo"}
          />
        </section>
      </main>
    </>
  );
};

export default page;
