import WhiteLogo from "@/public/medigeneit.svg";
import Image from "next/image";

function ApplicationLogo() {
  return (
    <>
      <Image className="h-full w-auto" src={WhiteLogo} alt="Medigene IT Logo" />
    </>
  );
}

export default ApplicationLogo;
