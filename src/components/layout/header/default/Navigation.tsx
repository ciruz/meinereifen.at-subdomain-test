import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <div className="bg-red-200 w-full p-8 flex flex-row justify-between">
      <div>
        <Image
          src="/images/meinereifen-logo.svg"
          alt="Logo"
          width={196}
          height={40}
        />
      </div>
      <ul className="flex flex-row gap-4">
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
