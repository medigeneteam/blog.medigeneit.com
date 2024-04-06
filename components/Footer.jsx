import Link from "next/link";
import {
  FaceBook,
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  Threads,
  Twitter,
  YouTube,
} from "./socials";

function Footer() {
  return (
    <>
      <footer className="container py-8">
        <div className="mt-16 flex flex-col items-center">
          <div className="mb-3 flex space-x-4">
            <GitHub />
            <FaceBook />
            <LinkedIn />
          </div>
          <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>© 2024</div>
            <div> • </div>
            <Link href={"/"}>Medigene IT Blog</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
