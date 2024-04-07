import Link from "next/link";

function SidebarLinkItem({ tag, totalBlog }) {
  return (
    <>
      <li key={tag} className="my-3">
        <Link
          href={`/tags/${tag}`}
          className="inline px-3 py-2 text-sm font-bold uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
        >
          {tag} ({totalBlog})
        </Link>
      </li>
    </>
  );
}

export default SidebarLinkItem;
