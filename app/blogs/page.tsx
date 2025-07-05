import BlogsSection from "@/components/blogs-section";
import React from "react";

export default function BlogPage() {
  return (
    <main className="container">
      <h2 style={{ margin: "100px 0 20px", textAlign: "center" }}>Blog</h2>
      <BlogsSection fromBlogPage />
    </main>
  );
}
