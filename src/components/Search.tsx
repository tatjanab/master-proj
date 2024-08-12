type SearchProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

function Search({ searchQuery, setSearchQuery }: SearchProps) {
  return (
    <input
      type='text'
      name='productSearch'
      id='productSearch'
      onChange={(e) => setSearchQuery(e.target.value)}
      value={searchQuery}
      className='border border-slate-400 py-2 px-4 rounded-sm text-xs'
      placeholder='Find a product by name'
    />
  );
}
export default Search;
