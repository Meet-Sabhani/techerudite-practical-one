"use client";

import siteConfig from "@/config/site.config";
import { apiCall } from "@/helpers/apiHelper";
import { BaseColors } from "@/lib/themeConfig";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

interface BlogsSectionI {
  fromBlogPage?: boolean;
}

const BlogsSection = ({ fromBlogPage = false }: BlogsSectionI) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const memoBlogs = useMemo(
    () => (fromBlogPage ? blogs : blogs.slice(0, 3)),
    [fromBlogPage, blogs]
  );

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await apiCall(siteConfig?.endpoints?.blog, "GET");
        setBlogs(res?.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return <BlogsSectionWrapper>Loading blogs...</BlogsSectionWrapper>;

  return (
    <BlogsSectionWrapper>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <div className="BlogList">
          {memoBlogs.map((blog: any) => (
            <div className="BlogCard" key={blog.id}>
              <img src={blog?.image_url} alt={blog?.name} />
              <div className="blog-info">
                <h3>{blog.name}</h3>
                <span>
                  {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  by {blog?.writer_name}
                </span>
                <p>{blog?.short_description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </BlogsSectionWrapper>
  );
};

export default BlogsSection;

const BlogsSectionWrapper = styled.div`
  .BlogList {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    .BlogCard {
      overflow: hidden;
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
      }

      .blog-info {
        padding: 1rem;

        h3 {
          font-size: 20px;
          font-weight: 400;
          margin-bottom: 0.5rem;
          color: ${BaseColors?.texBlack};
        }

        span {
          display: block;
          font-size: 0.9rem;
          color: #777;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 0.95rem;
          color: #555;
        }
      }
    }
  }
`;
