"use client";

import React from "react";
import { Input } from "../ui/input";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";
function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    }
    if (!value) {
      params.delete("search");
    }
    replace(`/product?${params}`);
  }, 500);
  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  return (
    <Input
      type="search"
      placeholder="search Product..."
      className="rounded-xl  max-w-xs mx-auto dark:bg-muted"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    ></Input>
  );
}

export default NavSearch;
