"use client";
import { useState } from "react";
import Blog from "@/components/common/Blog";
import { Navbar } from "@/components/common/Navbar";
import Project from "@/components/common/Project";
import ThemeToggle from "@/components/common/ThemeToggle";
import { projects } from "@/components/lists/projects";

const page = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleInputChange = (e: any) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);
    const filtered = projects.filter(
      (project) =>
        project.heading.toLowerCase().includes(input) ||
        project.oneLine.toLowerCase().includes(input) ||
        project.skill1.toLowerCase().includes(input) ||
        project.skill2.toLowerCase().includes(input) ||
        project.skill3.toLowerCase().includes(input)
    );
    setFilteredProjects(filtered);
  };

  return (
    <>
      <ThemeToggle />
      <main className="w-screen h-screen flex flex-col items-center">
        <section className="w-1/2 h-screen max-md:w-3/4">
          <Navbar />
          <div className="flex items-center justify-between">
            <h2 className="text-3xl mt-3">&gt;&gt; Projects <span className="text-xs">(client projects not included)</span></h2>
            <div className="flex items-center mt-auto gap-2">
              <p>Search</p>
              <input
                type="text"
                className="border border-black mt-auto rounded-md text-md p-1"
                value={searchInput}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {filteredProjects.map((project, index) => (
            <Project
              key={index}
              heading={project.heading}
              oneLine={project.oneLine}
              skill1={project.skill1}
              skill2={project.skill2}
              skill3={project.skill3}
              link={project.link}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default page;
