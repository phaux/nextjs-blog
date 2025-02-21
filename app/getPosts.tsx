/**
 * Post data which the API returns.
 */
export interface PostDataRaw {
  id: number;
  userId: number;
  title: string;
  body: string;
}
/**
 * All post data.
 */
export interface PostData extends PostDataRaw {
  category: (typeof postCategories)[number];
  date: Date;
}

export const postCategories = [
  "knowledge",
  "inspiration",
  "interpretation",
  "available",
];

export const categoryData: Record<
  (typeof postCategories)[number],
  { bg: string; text: string }
> = {
  knowledge: { bg: "royalblue", text: "white" },
  inspiration: { bg: "gold", text: "black" },
  interpretation: { bg: "crimson", text: "white" },
  available: { bg: "aquamarine", text: "black" },
};

export async function getPosts(page: number): Promise<PostData[]> {
  const req = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`,
  );
  if (!req.ok) {
    throw new Error(`Failed to fetch posts: ${req.statusText}`);
  }
  const data: PostDataRaw[] = await req.json();
  // Add fake category and date based on ID.
  return data.map((post) => ({
    ...post,
    category: postCategories[post.id % postCategories.length],
    date: new Date(1735689600000 + post.id * 7 * 24 * 60 * 60 * 1000),
  }));
}
