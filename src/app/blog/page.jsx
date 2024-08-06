import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h3 className="text-center text-4xl">Blogs</h3>
      <div className="grid grid-cols-2 gap-6 mt-8">
        {blogs.map((blog) => (
          <div key={blog.slug} className=" border p-4">
            <h3 className="text-xl font-medium">{blog.title}</h3>
            <h3 className="text-lg">{blog.description}</h3>
            <Link href={`/blog/${blog.slug}`}>
              <button className="btn bg-red-600 rounded-lg mt-4 text-white p-3">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const blogs = [
  {
    slug: "how-to-learn-react",
    title: "How to Learn React: A Comprehensive Guide",
    description:
      "A step-by-step guide to learning React from scratch, covering the basics to advanced concepts.",
  },
  {
    slug: "mern-stack-overview",
    title: "Understanding the MERN Stack",
    description:
      "An in-depth look at the MERN stack, its components, and how to build full-stack applications using MongoDB, Express, React, and Node.js.",
  },
  {
    slug: "css-tips-tricks",
    title: "CSS Tips and Tricks for Better Styling",
    description:
      "Improve your web design skills with these essential CSS tips and tricks for creating visually appealing and responsive layouts.",
  },
  {
    slug: "nextjs-beginners-guide",
    title: "Next.js for Beginners: Getting Started",
    description:
      "A beginner's guide to Next.js, explaining its features, advantages, and how to create your first Next.js application.",
  },
  {
    slug: "react-performance-optimization",
    title: "Optimizing React Performance",
    description:
      "Learn various techniques and best practices for optimizing the performance of your React applications.",
  },
  {
    slug: "web-accessibility-best-practices",
    title: "Web Accessibility: Best Practices",
    description:
      "Ensure your website is accessible to all users by following these web accessibility best practices and guidelines.",
  },
];

export default page;
