import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">About Page</h1>
      <div className="flex gap-8 text-2xl font-semibold">
        <Link href="/about/history">History</Link>
        <Link href="/about/mission">Mission</Link>
      </div>
    </div>
  );
};

export default page;
