function SidebarActiveItem({ tag, totalBlog }) {
  return (
    <>
      <li key={tag} className="my-3">
        <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
          {tag} ({totalBlog})
        </h3>
      </li>
    </>
  );
}

export default SidebarActiveItem;
