import type { Metadata } from "next";
import { CollectionContent } from "@/components/collection/CollectionContent";

export const metadata: Metadata = {
  title: "Collection",
  description: "Browse the full UNOCO shoe collection — running, casual, sneakers, sports, training, lifestyle, premium leather, and kids.",
};

export default function CollectionPage() {
  return <CollectionContent />;
}
