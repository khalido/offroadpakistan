import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return rss({
    title: "OffroadPakistan - Pakistani Adventure Heritage Archive",
    description:
      "Pakistani adventure and travel documentation from the 4x4 Offroaders Club Karachi",
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: `${post.data.category} - By ${post.data.author}`,
      link: `/posts/${post.id}/`,
      author: post.data.author,
      categories: post.data.tags || [post.data.category],
    })),
    customData: `<language>en-us</language>`,
  });
}
