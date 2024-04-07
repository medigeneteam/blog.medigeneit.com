import BlogCard from "@/components/BlogCard";
import SidebarLinkItem from "@/components/tags/SidebarLinkItem";
import { getBlogs } from "@/lib/blog";
import { getTagsWithBlogCount } from "@/utils/blog-util";

function BlogPage() {
  const blogs = getBlogs();

  const tagsWithBlogCount = getTagsWithBlogCount(blogs);

  return (
    <>
      <main className="mb-auto">
        <div className="container">
          <div className="pb-6 pt-6">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              All Posts
            </h1>
          </div>
          <div className="flex sm:space-x-24">
            <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
              <div className="px-6 py-4">
                <h3 className="font-bold uppercase text-primary-500">
                  All Posts
                </h3>
                <ul>
                  {tagsWithBlogCount.map((item) => (
                    <SidebarLinkItem
                      key={item.tag}
                      tag={item.tag}
                      totalBlog={item.totalBlog}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <ul>
                {blogs.map((blog) => (
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

export default BlogPage;
