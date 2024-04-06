import BlogListContainer from "@/components/BlogListContainer";

export default function Home() {
  return (
    <main className="divide-y divide-gray-200 dark:divide-gray-700">
      <h1 className="text-center my-8 text-4xl text-primary-500">
        Medigene IT Blog
      </h1>
      <div>
        <BlogListContainer />
      </div>
    </main>
  );
}
