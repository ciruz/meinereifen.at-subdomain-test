import { DealerSearchApiResponse } from "@/types/DealerSearchApiResponse";

export const fetchDealers = async (): Promise<DealerSearchApiResponse> => {
  const response = await fetch(
    `https://api.meinereifen.at/haendler/search?pt=0`
  );
  const dealers = await response.json();
  return dealers;
};
