import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export function PostCard(props: {
  className?: string;
  id: string;
  category: string;
  title: string;
  date: Date;
  content: string;
}) {
  const { className = "", id, category, title, date, content } = props;
  return (
    <article
      className={
        "flex flex-col gap-6 p-6 rounded-tl-4xl rounded-br-4xl bg-zinc-100 dark:bg-zinc-900" +
        className
      }
    >
      <header className="flex flex-col gap-3">
        <span className="text-sm uppercase underline italic decoration-2">
          {category}
        </span>
        <h1 className="text-xl font-serif font-bold leading-6 text-balance">
          {title}
        </h1>
      </header>
      <time
        className="font-serif text-sm font-bold"
        dateTime={date.toISOString()}
      >
        {date.toLocaleDateString()}
      </time>
      <p className="text-sm leading-6">{content}</p>
      <Link
        href={`/articles/${id}`}
        className="-m-4 p-4 flex gap-2 items-center font-bold text-sm hover:underline"
      >
        zobacz więcej <ArrowRightIcon />
      </Link>
    </article>
  );
}
