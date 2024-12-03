import { DealerSearchApiResponse } from "@/types/DealerSearchApiResponse";

export const fetchDealers = async (
  pt: string
): Promise<DealerSearchApiResponse> => {
  const response = await fetch(
    `https://api.meinereifen.at/haendler/search?pt=${pt}`
  );
  const dealers = await response.json();
  return dealers;
};
