import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DefaultNavigation() {
  return (
    <div className="bg-red-200 w-full p-8 flex flex-row justify-between">
      <div>
        <Link href="/" className="cursor-pointer">
          <Image
            src="/images/meinereifen-logo.svg"
            alt="Logo"
            width={196}
            height={40}
          />
        </Link>
      </div>
      <ul className="flex flex-row gap-4 ml-4 p-4">
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
