import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { useState, useCallback, useRef } from "react";
import { useKeyPressEvent } from 'react-use';
import { animated, config, useSpring } from '@react-spring/web';


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
  const searchStyle = useSpring({
    from: {
        y: 48,
        opacity:0
    },
    to: {
        y: 0,
        opacity:1
    },
    config:config.stiff
})

  return (
    <>
      <animated.div style={searchStyle} className="flex flex-col relative w-full mt-4">
        <label className="self-center mb-8 text-slate-400 dark:text-slate-500 text-sm">
          Search by district or dams
        </label>
        <div className="line"></div>

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

          {!expand && searchValue === "" && (<span className="absolute top-5 left-16 text-slate-400 dark:text-slate-500 text-base"></span>
          )}
          <div className="">
            <SearchIcon className="absolute top-5 text-slate-400 dark:text-slate-500 left-4 h-6" />
          </div>

          {searchValue.length > 0 && (
          <div onClick={handleClose}>
            <XIcon className="absolute top-5 text-slate-400 dark:text-slate-500 cursor-pointer right-4 h-6"/>
          </div>
        )}

        </div>

      </animated.div>
    </>);
}
export default Search;