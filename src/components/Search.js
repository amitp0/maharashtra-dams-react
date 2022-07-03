import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { useState, useCallback, useRef } from "react";
import { useKeyPressEvent } from 'react-use';


function Search() {

  const [expand, setExpand] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchInput = useRef(null);
  const handleClose = useCallback(() => {
    setSearchValue('');
  }, []);
  const handleChange = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  useKeyPressEvent('Escape', () => {
    handleClose();
    searchInput.current.blur();
  });

  return (
    <>
      <div className="flex flex-col relative w-full mt-4">
        <label className="self-center mb-8 text-slate-400 dark:text-slate-500 text-sm">
          Search your district or dam
        </label>
        <div className="line fadeInUp"></div>

        <div className="relative w-full">
          <input
            type="text"
            value={searchValue}
            ref={searchInput}
            onFocus={setExpand.bind(this, true)}
            onBlur={setExpand.bind(this, false)}
            onChange={handleChange}
            className="appearance-none w-full h-16 p-4 pb-5 pl-16 text-base text-slate-400
            drop-shadow-lg rounded outline-none dark:bg-slate-800"
          />

          {!expand && searchValue === "" && (<span className="absolute top-5 left-16 text-slate-400 dark:text-slate-500 text-base">Maharashtra district</span>
          )}
          <div className="">
            <SearchIcon className="absolute top-5 text-slate-400 dark:text-slate-500 left-4 h-6" />
          </div>

          {searchValue.length > 0 && (
          <div className={`close-button`} onClick={handleClose}>
            <XIcon className="absolute top-5 text-slate-400 dark:text-slate-500 cursor-pointer right-4 h-6"/>
          </div>
        )}

        </div>

      </div>
    </>);
}
export default Search;