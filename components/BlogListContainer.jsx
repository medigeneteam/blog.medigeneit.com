import BlogCard from "./BlogCard";

function BlogListContainer() {
  return (
    <>
      <div className="container divide-y divide-gray-200 dark:divide-gray-700">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
}

export default BlogListContainer;
