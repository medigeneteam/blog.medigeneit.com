import Link from "next/link";

function Tag({ tag }) {
  return (
    <>
      <Link
        className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        href={`/tags/${tag}`}
      >
        # {tag}
      </Link>
    </>
  );
}

export default Tag;
