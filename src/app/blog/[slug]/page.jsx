import React from "react";

const page = ({params}) => {
  console.log(params.slug);
  const {title, description} = blogs.find((blog) => blog.slug == params.slug);
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold">Details</h1>
      <div className="border p-8 mt-8">
        <h2 className="text-xl font-semibold"> {title} </h2>
        <h2 className="text-lg font-lg"> {description} </h2>
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
