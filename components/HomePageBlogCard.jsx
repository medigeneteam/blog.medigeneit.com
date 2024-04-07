import { getDateFormate } from "@/utils/blog-util";
import Link from "next/link";
import Tag from "./Tag";

function HomePageBlogCard({ blog }) {
  return (
    <>
      <div className="py-12">
        <article>
          <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <span>{getDateFormate(blog?.date)}</span>
              </dd>
            </dl>
            <div className="space-y-5 xl:col-span-3">
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
                  <div className="flex flex-wrap">
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
          </div>
        </article>
      </div>
    </>
  );
}

export default HomePageBlogCard;
