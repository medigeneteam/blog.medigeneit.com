import Link from "next/link";
import ApplicationLogo from "./ApplicationLogo";

function Header() {
  return (
    <>
      <header className="sticky top-0 w-full z-40">
        <div className="bg-primary-600 dark:bg-gray-900 w-full py-4">
          <div className="container flex justify-between">
            <Link href={"/"} className="h-8">
              <ApplicationLogo />
            </Link>
            <nav className="flex gap-4 justify-center items-center text-white">
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/tags"}>Tags</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
