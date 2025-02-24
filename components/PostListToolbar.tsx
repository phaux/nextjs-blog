"use client";
import clsx from "clsx";
import Link from "next/link";
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from "next/navigation";

export function PostListToolbar(props: { className?: string }) {
  const { className } = props;
  const params = useSearchParams();
  const router = useRouter();
  const filters = params.getAll("filter");
  const favorite = filters.includes("favorite");
  const order = params.get("order");

  return (
    <form
      role="search"
      className={clsx("flex flex-wrap gap-8 items-center", className)}
    >
      <p className="flex-1 flex gap-8 items-baseline">
        <Link
          href={{
            query: overrideParams(params, { filter: "favorite" }).toString(),
          }}
          scroll={false}
          className={clsx(
            "uppercase decoration-2 cursor-pointer",
            favorite && "text-red-900 dark:text-red-700 font-bold underline"
          )}
        >
          Ulubione
        </Link>
        <span className="text-red-900 dark:text-red-700">{" / "}</span>
        <Link
          href={{
            query: overrideParams(params, { filter: "" }).toString(),
          }}
          scroll={false}
          className={clsx(
            "uppercase decoration-2 cursor-pointer",
            !favorite && "text-red-900 dark:text-red-700 font-bold underline"
          )}
        >
          Wszystkie
        </Link>
      </p>
      <label className="flex-1 flex gap-8 items-baseline">
        <span className="text-slate-400">Sortowanie</span>{" "}
        <select
          className="font-bold border-b-1 border-b-slate-500 h-10 cursor-pointer"
          name="order"
          value={order || "latest"}
          onChange={(e) =>
            router.push(
              "?" +
                overrideParams(params, { order: e.target.value }).toString(),
              { scroll: false }
            )
          }
        >
          <option value="latest">Najnowsze</option>
          <option value="title">Alfabetycznie</option>
        </select>
      </label>
    </form>
  );
}

function overrideParams(
  params: ReadonlyURLSearchParams,
  overrides: Record<string, string | null>
) {
  const newParams = new URLSearchParams(params);
  for (const [key, value] of Object.entries(overrides)) {
    if (value != null) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
  }
  return newParams;
}
