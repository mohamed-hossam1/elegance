"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/urls";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

interface Props {
  placeholder: string;
}

const LocalSearch = ({ placeholder }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const paramsString = searchParams.toString();

  const search = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        router.push(
          formUrlQuery({
            params: paramsString,
            key: "search",
            value: searchQuery,
          }),
          { scroll: false },
        );
      } else {
        router.push(
          removeKeysFromUrlQuery({
            params: paramsString,
            keysToRemove: ["search"],
          }),
          { scroll: false },
        );
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, paramsString]);

  return (
    <>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors duration-300 peer-focus:text-primary" />

      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border-primary/20 bg-secondary pl-10 peer focus:border-primary/40 transition-all duration-300"
      />
    </>
  );
};

export default LocalSearch;
