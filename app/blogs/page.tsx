"use client";

import { useState } from "react";
import Blog from "@/components/common/Blog";
import { Navbar } from "@/components/common/Navbar";
import ThemeToggle from "@/components/common/ThemeToggle";
import { blogs } from "@/components/lists/blogs";

const page = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const handleInputChange = (e: any) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);
    const filtered = blogs.filter(
      (blog) =>
        blog.heading.toLowerCase().includes(input) ||
        blog.oneLine.toLowerCase().includes(input)
    );
    setFilteredBlogs(filtered);
  };

  return (
    <>
      <ThemeToggle />
      <main className="w-screen h-screen flex flex-col items-center">
        <section className="w-1/2 h-screen max-md:w-3/4">
          <Navbar />
          <div className="flex items-center justify-between">
            <h2 className="text-3xl mt-3">&gt;&gt; Blogs</h2>
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
          {filteredBlogs.map((blog, index) => (
            <Blog
              key={index}
              heading={blog.heading}
              oneLine={blog.oneLine}
              link={blog.link}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default page;
