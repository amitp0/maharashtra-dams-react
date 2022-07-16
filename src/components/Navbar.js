import {
  ChartPieIcon,
  ChartSquareBarIcon,
  HomeIcon,
  MoonIcon,
  QuestionMarkCircleIcon,
  SunIcon,
} from "@heroicons/react/outline";

import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  const activeNavIcon = (path) => ({
    style: {
      stroke: window.location.pathname === path ? "#2563eb" : "",
      color: window.location.pathname === path ? "#2563eb" : "",
    },
  });

  return (
    <>
      <div className="flex h-screen dark:bg-slate-900 fixed z-[999]">
        <div className="bg-slate-100 flex flex-col dark:bg-slate-800">
          <Link to="/">
            <svg
              className="my-4 mb-8"
              width="auto"
              height="64"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_413_230)">
                <path
                  d="M20.2549 30.2515C19.6429 28.8493 19.4605 27.297 19.7307 25.7911C20.0009 24.2852 20.7116 22.8933 21.773 21.7913C22.8343 20.6893 24.1985 19.9267 25.6932 19.6001C27.1879 19.2734 28.7459 19.3974 30.1701 19.9562C31.5944 20.515 32.821 21.4836 33.6947 22.7395C34.5685 23.9954 35.0502 25.4822 35.079 27.0119C35.1078 28.5416 34.6823 30.0454 33.8564 31.3333C33.0304 32.6212 31.8412 33.6352 30.4389 34.2472C28.5583 35.0653 26.4299 35.1041 24.5207 34.3551C22.6115 33.606 21.0774 32.1302 20.2549 30.2515ZM32.0713 25.0946C31.6633 24.1597 30.9873 23.3669 30.1287 22.8163C29.2702 22.2657 28.2676 21.982 27.2478 22.0012C26.228 22.0204 25.2368 22.3415 24.3995 22.924C23.5622 23.5065 22.9165 24.3242 22.544 25.2738C22.1714 26.2233 22.0888 27.2619 22.3066 28.2584C22.5243 29.2548 23.0327 30.1643 23.7674 30.8719C24.502 31.5794 25.43 32.0532 26.4339 32.2334C27.4379 32.4135 28.4727 32.2919 29.4075 31.8839C30.6599 31.3355 31.6437 30.3127 32.1431 29.04C32.6424 27.7672 32.6166 26.3483 32.0713 25.0946Z"
                  fill="#0077B6"
                />
                <path
                  d="M15.5284 32.3143C14.8042 30.6516 14.4383 28.8549 14.4547 27.0414C14.4672 25.6585 14.7017 24.2894 15.1467 22.9859C15.3767 22.3122 16.1482 22.0288 16.7955 22.325C17.443 22.6212 17.719 23.3849 17.5055 24.0641C17.1211 25.2869 16.9668 26.5744 17.0547 27.8606C17.172 29.5771 17.7168 31.237 18.6395 32.6892C19.5622 34.1413 20.8336 35.3395 22.3377 36.1748C23.8419 37.01 25.5311 37.4557 27.2515 37.4713C28.972 37.4868 30.6689 37.0718 32.188 36.2639C33.707 35.456 34.9998 34.281 35.9487 32.8458C36.8975 31.4106 37.4723 29.7608 37.6206 28.0468C37.7318 26.7622 37.6008 25.4722 37.2385 24.2426C37.0373 23.5596 37.327 22.8009 37.9796 22.5161C38.6322 22.2313 39.3988 22.5281 39.6171 23.2059C40.5248 26.0248 40.438 29.0852 39.3468 31.8663C38.0979 35.0495 35.6356 37.6061 32.5017 38.9738C29.3678 40.3415 25.8189 40.4082 22.6358 39.1593C19.4527 37.9104 16.8961 35.4482 15.5284 32.3143Z"
                  fill="#ADE8F4"
                />
                <path
                  d="M10.8018 34.3771C9.37388 31.1052 8.94826 27.4833 9.57875 23.9695C10.2092 20.4557 11.8675 17.2078 14.3439 14.6365C16.8203 12.0652 20.0036 10.2859 23.4912 9.52374C26.9788 8.76157 30.6141 9.05071 33.9374 10.3546C37.2606 11.6585 40.1226 13.9186 42.1614 16.849C44.2002 19.7795 45.3243 23.2487 45.3914 26.8179C45.4585 30.3872 44.4657 33.8963 42.5386 36.9013C40.6114 39.9063 37.8364 42.2724 34.5645 43.7003C30.1764 45.6095 25.2102 45.7 20.7553 43.9522C16.3005 42.2043 12.7209 38.7608 10.8018 34.3771ZM41.5245 20.969C40.3006 18.1646 38.2725 15.786 35.6967 14.1341C33.121 12.4823 30.1133 11.6313 27.0539 11.6888C23.9945 11.7464 21.0209 12.7098 18.5091 14.4574C15.9972 16.2049 14.06 18.6581 12.9424 21.5066C11.8248 24.3551 11.577 27.4711 12.2303 30.4604C12.8836 33.4498 14.4086 36.1783 16.6126 38.3009C18.8166 40.4236 21.6005 41.845 24.6124 42.3854C27.6242 42.9258 30.7286 42.561 33.5331 41.3371C37.2905 39.692 40.2421 36.6238 41.7402 32.8054C43.2384 28.987 43.1608 24.7303 41.5245 20.969Z"
                  fill="#023E8A"
                />
              </g>
              <defs>
                <clipPath id="clip0_413_230">
                  <rect
                    width="41.2566"
                    height="41.2566"
                    fill="white"
                    transform="translate(38) rotate(66.4226)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>

          <Link to="/" className="cursor-pointer my-4">
            <div className="px-8">
              <HomeIcon
                className="text-slate-400 h-7 "
                {...activeNavIcon("/")}
              />
            </div>
            <p
              className="w-full font-base text-center pt-2 text-sm text-slate-400"
              {...activeNavIcon("/")}
            >
              Home
            </p>
          </Link>

          <Link to="/stats" className="cursor-pointer my-4">
            <div className="px-8">
              <ChartPieIcon
                className="text-slate-400 h-7 "
                {...activeNavIcon("/stats")}
              />
            </div>
            <p
              className="w-full font-base text-center pt-2 text-sm text-slate-400"
              {...activeNavIcon("/stats")}
            >
              Stats
            </p>
          </Link>

          <Link to="/report" className="cursor-pointer my-4">
            <div className="px-8 cursor-pointer">
              <ChartSquareBarIcon
                className="text-slate-400 h-7"
                {...activeNavIcon("/report")}
              />
            </div>
            <p
              className="w-full font-base text-center pt-2 text-sm text-slate-400"
              {...activeNavIcon("/report")}
            >
              Report
            </p>
          </Link>

          <Link to="/about" className="cursor-pointer my-4">
            <div className="px-8 cursor-pointer">
              <QuestionMarkCircleIcon
                className="text-slate-400 h-7 "
                {...activeNavIcon("/about")}
              />
            </div>
            <p
              className="w-full font-base font-inter text-center pt-2 text-sm text-slate-400"
              {...activeNavIcon("/about")}
            >
              About
            </p>
          </Link>

          <div className="px-8 py-12 cursor-pointer fixed bottom-0">
            {colorTheme === "light" ? (
              <SunIcon
                className="text-yellow-400 h-7 "
                onClick={() => setTheme("light")}
              />
            ) : (
              <MoonIcon
                className="text-slate-400 h-7 "
                onClick={() => setTheme("dark")}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
