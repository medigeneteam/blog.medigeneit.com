import Tag from "@/components/Tag";
import { getBlogContent } from "@/lib/blog";
import { getDateFullFormat } from "@/utils/blog-util";

async function SingleBlogPage({ params: { slug } }) {
  const blog = await getBlogContent(slug);

  return (
    <>
      <main className="mb-auto">
        <section className="container">
          <header className="pt-6 pb-2 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime="2018-08-15T00:00:00.000Z">
                      {getDateFullFormat(blog?.date)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  {blog?.title}
                </h1>
              </div>
            </div>
          </header>
          <div className="flex flex-wrap justify-center items-center mb-4">
            {blog?.tags?.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
          <article
            className="prose lg:prose-xl dark:prose-invert mx-auto text-justify"
            dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
          ></article>
        </section>
      </main>
    </>
  );
}

export default SingleBlogPage;
