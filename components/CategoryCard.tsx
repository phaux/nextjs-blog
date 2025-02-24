import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cloneElement } from "react";
import { UrlObject } from "url";

export function CategoryCard(props: {
  className?: string;
  href: string | UrlObject;
  image: StaticImageData;
  alt: string;
  title: string;
  icon: React.ReactElement<{ className?: string }>;
  active?: boolean;
}) {
  const {
    className = "",
    href,
    image,
    alt,
    title,
    icon,
    active = false,
  } = props;
  return (
    <Link
      href={href}
      scroll={false}
      className={clsx(
        "group flex flex-col items-stretch overflow-clip rounded-tl-4xl rounded-br-4xl ",
        active && "ring-8",
        className,
      )}
    >
      <div className="grid place-items-stretch h-48 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          className="object-cover group-hover:scale-110 transition group-hover:brightness-110"
        />
      </div>
      <span className="flex flex-col items-center gap-4 justify-center min-h-48">
        <span className="text-lg font-bold uppercase">{title}</span>
        {cloneElement(icon, { className: "size-10" })}
      </span>
    </Link>
  );
}
