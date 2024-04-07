export function getDateFormate(date) {
  const options = { month: "long", day: "numeric", year: "numeric" };

  const formattedDate = new Date(date).toLocaleDateString("en-US", options);

  return formattedDate;
}

export function getDateFullFormat(dateString) {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );

  return formattedDate;
}

export function getTags(blogs) {
  const tagsSet = new Set();

  if (!blogs) {
    return [];
  }

  // Iterate over each blog and collect tags
  blogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      tagsSet.add(tag);
    });
  });

  // Convert the Set to an array and return
  return Array.from(tagsSet);
}

export function getTagsWithBlogCount(blogs) {
  const tagsMap = {};

  if (!blogs) {
    return [];
  }

  // Iterate over each blog and count tags
  blogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      if (tagsMap[tag]) {
        tagsMap[tag]++;
      } else {
        tagsMap[tag] = 1;
      }
    });
  });

  // Convert tagsMap to an array of objects
  const tagsWithCounts = Object.keys(tagsMap).map((tag) => ({
    tag,
    totalBlog: tagsMap[tag],
  }));

  return tagsWithCounts;
}
