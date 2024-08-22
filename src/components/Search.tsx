import { SetURLSearchParams } from "react-router-dom";

function Search({
  searchParams,
  setSearchParams,
}: {
  searchParams: string;
  setSearchParams: SetURLSearchParams;
}) {
  return (
    <input
      type='text'
      name='productSearch'
      id='productSearch'
      onChange={(e) =>
        setSearchParams(
          (prev) => {
            prev.set("search", e.target.value);
            return prev;
          },
          { replace: true },
        )
      }
      value={searchParams}
      className='border border-slate-400 py-2 px-2 rounded-sm text-xs min-w-full'
      placeholder='Find a product by name'
    />
  );
}
export default Search;
