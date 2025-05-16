"use client";

import { useEffect, useState } from "react";
import BlogSlider from "./BlogSlider";

type Article = {
  title: string;
  date: string;
  link: string;
  image: string;
};

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch("/api/blog-feed");
      const data = await res.json();
      setArticles(data);
    };
    fetchBlog();
  }, []);

  return (
    <div className="w-full [&_.swiper-pagination]:pr-7 [&_.swiper-pagination-bullet-active]:bg-tertiaryColor">
      <BlogSlider blog={articles} />
    </div>
  );
}