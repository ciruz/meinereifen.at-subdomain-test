import Item from "@/components/features/dealer/search/Item";
import { Dealer } from "@/types/DealerSearchApiResponse";
import { fetchDealers } from "@/utils/fetch-dealers";
import { headers } from "next/headers";
import React from "react";

export default async function Page() {
  const headersList = await headers();
  const subdomain = headersList.get("x-subdomain") || "default";

  const pt = subdomain === "wl-lc" ? "v4Lkda9cF2lzqpnwrwoq" : 0;

  const dealers = await fetchDealers(pt);

  return (
    <div className="p-8">
      <h1 className="mb-8 font-bold text-2xl">
        {dealers.pagination.total} Händler gefunden
      </h1>
      <ul className="flex flex-col gap-6">
        {dealers.data.map((dealer: Dealer) => (
          <li key={dealer.id}>
            <Item item={dealer} />
          </li>
        ))}
      </ul>
    </div>
  );
}
