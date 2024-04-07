import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const fileExtension = "mdx";

const directory = path.join(process.cwd(), "data/blog");

function getMatterResult(id) {
  const fullPath = path.join(directory, `${id}.${fileExtension}`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  return matter(fileContents);
}

export function getBlogs() {
  const fileNames = fs.readdirSync(directory);

  const blogs = fileNames.map((fileName) => {
    const id = fileName.replace(`.${fileExtension}`, "");

    const matterResult = getMatterResult(id);

    return {
      id,
      ...matterResult.data,
    };
  });

  return blogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA < dateB) {
      return 1;
    }
    if (dateA > dateB) {
      return -1;
    }
    return 0;
  });
}

export async function getBlogContent(id) {
  const matterResult = getMatterResult(id);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    ...matterResult.data,
    contentHtml,
  };
}
