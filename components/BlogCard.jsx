import Tag from "@/components/Tag";
import { getDateFormate } from "@/utils/blog-util";
import Link from "next/link";

function BlogCard({ blog }) {
  return (
    <>
      <li className="py-5">
        <article className="flex flex-col space-y-2 xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime="2023-08-05T00:00:00.000Z">
                {getDateFormate(blog?.date)}
              </time>
            </dd>
          </dl>
          <div className="space-y-5">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Link
                    className="text-gray-900 dark:text-gray-100"
                    href={`/blog/${blog.id}`}
                  >
                    {blog?.title}
                  </Link>
                </h2>
                <div className="flex flex-wrap mt-1">
                  {blog?.tags?.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                {blog?.summary}
              </div>
            </div>
            <div className="text-base font-medium leading-6">
              <Link
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href={`/blog/${blog.id}`}
              >
                Read more →
              </Link>
            </div>
          </div>
        </article>
      </li>
    </>
  );
}

export default BlogCard;
