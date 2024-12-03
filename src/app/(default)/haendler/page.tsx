import Item from "@/components/features/dealer/search/Item";
import { Dealer } from "@/types/DealerSearchApiResponse";
import { fetchDealers } from "@/utils/fetch-dealers";
import React from "react";

export default async function Page() {
  const dealers = await fetchDealers();

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
