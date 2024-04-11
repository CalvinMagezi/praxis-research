import { IconGitHub } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full px-4 border-b h-14 shrink-0 bg-brand_black backdrop-blur-xl">
      <div className="inline-flex space-x-4 items-center home-links whitespace-nowrap">
        <a href="https://developersdigest.tech" rel="noopener" target="_blank">
          <span className="block sm:inline text-lg sm:text-xl lg:text-2xl font-semibold">
            Praxis Research
          </span>
        </a>
        <Link href="https://mts-africa.tech">
          <Image src={"./logo.svg"} width={40} height={40} alt="plur logo" />
        </Link>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <UserButton />
      </div>
    </header>
  );
}
