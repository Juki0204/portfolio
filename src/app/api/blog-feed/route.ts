import Parser from "rss-parser";

export async function GET() {
  const parser = new Parser();
  const feed = await new Parser().parseURL('https://naomaru-blog.vercel.app/feed');
  const articles = feed.items.map((item) => ({
    title: item.title ?? "",
    date: item.pubDate ?? "",
    link: item.link ?? "",
    image: item.enclosure ? item.enclosure.url : "/img/dummy.jpg",
  }));

  return Response.json(articles, {
    headers: {
      "Cache-Control": "s-maxage=3600",
    },
  });
}