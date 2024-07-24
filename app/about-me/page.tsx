import { Navbar } from "@/components/common/Navbar";
import ThemeToggle from "@/components/common/ThemeToggle";

const page = () => {
  return (
    <>
      <ThemeToggle />
      <main className="w-screen h-screen flex flex-col items-center">
        <section className="w-1/2 h-screen max-md:w-3/4">
          <Navbar />
        </section>
      </main>
    </>
  );
};

export default page