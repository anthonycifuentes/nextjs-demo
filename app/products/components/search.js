"use client";
import { useRouter } from "next/navigation";
const Search = () => {
  const router = useRouter();

  // const handleChange = useCallback(
  //   debounce((e) => router.push(`/?search=${e.target.value}`), 500),
  //   []
  // );
  
  return (
    <input
      style={{ width: "300px", padding: "8px", margin: "32px auto", display: "flex" }}
      type="text"
      onChange={(e) => router.push(`products?search=${e.target.value}`)}
    />
  );
};

export default Search;
