import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LuckycarNavigation() {
  return (
    <div className="bg-[#ffe500] w-full px-8 py-2 flex flex-row justify-start">
      <div>
        <Link href="/" className="cursor-pointer">
          <Image src="/images/lc.webp" alt="Logo" width={182} height={60} />
        </Link>
      </div>
      <ul className="flex flex-row gap-8 p-4 font-bold ml-8">
        <li className="hover:underline cursor-pointer">
          <Link href="/">Startseite</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link href="/haendler">Händler</Link>
        </li>
      </ul>
    </div>
  );
}
