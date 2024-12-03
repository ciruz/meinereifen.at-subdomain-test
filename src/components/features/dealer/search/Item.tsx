import { Dealer } from "@/types/DealerSearchApiResponse";
import React from "react";

export default function Item({ item }: { item: Dealer }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="font-bold">{item.title}</div>
      <div>
        {item.plz} {item.ort}
      </div>
    </div>
  );
}
