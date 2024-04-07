import BlogCard from "@/components/BlogCard";
import SidebarActiveItem from "@/components/tags/SidebarActiveItem";
import SidebarLinkItem from "@/components/tags/SidebarLinkItem";
import { getBlogs } from "@/lib/blog";
import { getTagsWithBlogCount } from "@/utils/blog-util";
import Link from "next/link";

function TagPage({ params: { tag } }) {
  const blogs = getBlogs();

  const filteredBlogs = blogs.filter((blog) => blog.tags.includes(tag));

  const tagsWithBlogCount = getTagsWithBlogCount(blogs);

  return (
    <>
      <main className="mb-auto">
        <div className="container">
          <div className="pb-6 pt-6">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              {tag}
            </h1>
          </div>
          <div className="flex sm:space-x-24">
            <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
              <div className="px-6 py-4">
                <Link
                  className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                  href={"/blog"}
                >
                  All Posts
                </Link>
                <ul>
                  {tagsWithBlogCount.map((item) =>
                    item.tag.toLocaleLowerCase() === tag.toLocaleLowerCase() ? (
                      <SidebarActiveItem
                        key={item.tag}
                        tag={item.tag}
                        totalBlog={item.totalBlog}
                      />
                    ) : (
                      <SidebarLinkItem
                        key={item.tag}
                        tag={item.tag}
                        totalBlog={item.totalBlog}
                      />
                    )
                  )}
                </ul>
              </div>
            </div>
            <div>
              <ul>
                {filteredBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TagPage;
