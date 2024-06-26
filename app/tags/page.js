import { getBlogs } from "@/lib/blog";
import { getTagsWithBlogCount } from "@/utils/blog-util";
import Link from "next/link";

export default function TagsPage() {
  const blogs = getBlogs();

  const tagsWithBlogCount = getTagsWithBlogCount(blogs);

  return (
    <>
      <main className="mb-auto">
        <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
          <div className="space-x-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
              Tags
            </h1>
          </div>
          <div className="flex max-w-lg flex-wrap">
            <div className="mb-2 mr-5 mt-2">
              {tagsWithBlogCount.map((item) => (
                <Link
                  key={item.tag}
                  className="mr-3 text-sm font-medium uppercase inline-flex justify-center items-center gap-1"
                  href={`/tags/${item.tag}`}
                >
                  <span className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    {item.tag}
                  </span>
                  <span>({item.totalBlog})</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
