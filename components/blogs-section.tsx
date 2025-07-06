"use client";

import siteConfig from "@/config/site.config";
import { apiCall } from "@/helpers/apiHelper";
import { BaseColors } from "@/lib/themeConfig";
import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import styled from "styled-components";

interface BlogsSectionI {
  fromBlogPage?: boolean;
}

const BlogsSection = ({ fromBlogPage = false }: BlogsSectionI) => {
  const {
    data: blogs = [],
    isLoading: loading,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: () =>
      apiCall(siteConfig?.endpoints?.blog, "GET").then(
        (res) => res?.data || []
      ),
  });

  const memoBlogs = useMemo(
    () => (fromBlogPage ? blogs : blogs.slice(0, 3)),
    [fromBlogPage, blogs]
  );

  if (loading)
    return <BlogsSectionWrapper>Loading blogs...</BlogsSectionWrapper>;

  if (isError) {
    console.error("Error fetching blogs:", error);
    return <p>Failed to load blogs.</p>;
  }

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

  @media (max-width: 768px) {
    .BlogList {
      .BlogCard {
        img {
          height: 170px;
        }

        .blog-info {
          h3 {
            font-size: 18px;
          }

          span {
            font-size: 14px;
          }

          p {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
