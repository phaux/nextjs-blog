import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cloneElement } from "react";

export function CategoryCard(props: {
  className?: string;
  href: string;
  image: StaticImageData;
  alt: string;
  title: string;
  icon: React.ReactElement<{ className?: string }>;
}) {
  const { className = "", href, image, alt, title, icon } = props;
  return (
    <Link
      href={href}
      className={
        "group flex flex-col items-stretch overflow-clip rounded-tl-4xl rounded-br-4xl " +
        className
      }
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
