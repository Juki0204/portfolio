import Parser from "rss-parser";

import BlogSlider from "./BlogSlider";

export default async function Blog() {
  const blogRss = await new Parser().parseURL('https://naomaru-blog.vercel.app/feed');
  const articles: {
    title: string,
    date: string,
    link: string,
    image: string,
  }[] =
    blogRss.items.map(blog => {
      return {
        title: blog.title ?? "",
        date: blog.pubDate ?? "",
        link: blog.link ?? "",
        image: blog.enclosure ? blog.enclosure.url : "/img/dummy.jpg",
      }
    });

  return (
    <div className="w-full [&_.swiper-pagination]:pr-7">
      <BlogSlider blog={articles} />
    </div>
  );
}