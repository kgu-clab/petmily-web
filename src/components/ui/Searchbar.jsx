import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Searchbar = () => {
  return (
    <>
      <input
        type="text"
        placeholder="검색하여 찾을 수 있어요!"
        className="mr-1 h-10 w-full rounded-lg pl-2 outline-pm-main"
      />

      <button className="flex h-10 w-12 items-center justify-center rounded-lg bg-yellow-600 hover:bg-yellow-700">
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </>
  );
};

export default Searchbar;
