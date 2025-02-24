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
  category: PostCategory;
  date: Date;
}

export type PostCategory = (typeof postCategories)[number];

export const postCategories = [
  "knowledge",
  "inspiration",
  "interpretation",
  "available",
] as const;

export const categoryData: Record<
  PostCategory,
  { bg: string; text: string; name: { pl: string } }
> = {
  knowledge: {
    bg: "royalblue",
    text: "white",
    name: { pl: "Wiedza" },
  },
  inspiration: {
    bg: "gold",
    text: "black",
    name: { pl: "Inspiracje" },
  },
  interpretation: {
    bg: "crimson",
    text: "white",
    name: { pl: "Interpretacje" },
  },
  available: {
    bg: "aquamarine",
    text: "black",
    name: { pl: "Dostępne" },
  },
};

export async function getPosts(page: number): Promise<PostData[]> {
  const req = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`,
  );
  if (!req.ok) {
    throw new Error(`Failed to fetch posts: ${req.statusText}`);
  }
  const data: PostDataRaw[] = await req.json();
  return data.map(transformPost);
}

export async function getPost(id: number): Promise<PostData> {
  const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!req.ok) {
    throw new Error(`Failed to fetch post: ${req.statusText}`);
  }
  const data: PostDataRaw = await req.json();
  return transformPost(data);
}

/**
 * Transform raw post data into post data.
 */
function transformPost(post: PostDataRaw): PostData {
  return {
    ...post,
    category: postCategories[post.id % postCategories.length],
    date: new Date(1735689600000 + post.id * 7 * 24 * 60 * 60 * 1000),
  };
}
