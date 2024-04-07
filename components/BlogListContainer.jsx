import { getBlogs } from "@/lib/blog";
import HomePageBlogCard from "./HomePageBlogCard";

function BlogListContainer() {
  const blogs = getBlogs();

  return (
    <>
      <div className="container divide-y divide-gray-200 dark:divide-gray-700">
        {blogs.map((blog) => (
          <HomePageBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
}

export default BlogListContainer;
