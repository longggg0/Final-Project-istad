import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { getProfile } from "../features/auth/authAction";
import { logout } from "../features/auth/authSlice";

// Avtar with darpdown menu
const AvatarMenue = ({ avatar }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const profileRef = useRef();

  const navigation = [{ title: "Dashboard", path: "javascript:void(0)" }];
  const onLogOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    // const handleDropDown = (e) => {
    //     if (!profileRef.current.contains(e.target)) setState(false)
    // }
    // document.addEventListener('click', handleDropDown)
  }, []);

  return (
    <div className="relative border-t lg:border-none">
      <div className="">
        <button
          ref={profileRef}
          className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
          onClick={() => setState(!state)}
        >
          <img src={avatar} className="w-full h-full rounded-full" />
        </button>
      </div>
      <ul
        className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <a className="block lg:hover:bg-gray-50 lg:p-3" href={item.path}>
              {item.title}
            </a>
          </li>
        ))}
        <button
          onClick={onLogOut}
          className="block w-full text-justify text-red-600 hover:text-red-900 border-t py-3 lg:hover:bg-red-50 lg:p-3"
        >
          Logout
        </button>
      </ul>
    </div>
  );
};

export default function AppNavbar() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const profile = useSelector((state) => state.auth.profile);
  const accessToken = useSelector((state) => state.auth.accessToken);

  const [state, setState] = useState(false);

  useEffect(() => {
    console.log("app navbar use effect");
    dispatch(getProfile(accessToken));
  }, [isAuthenticated]);

  // Replace javascript:void(0) paths with your paths
  const navigation = [];

  const submenuNav = [
    { title: "Home", path: "/" },
    { title: "Character", path: "/people" },
    { title: "Popular", path: "/popular" },
    { title: "Upcomming", path: "/upcomming" },
    { title: "Now Playing", path: "/now-playing" },
    { title: "Top Rated", path: "/top-rated" },
    { title: "About Us", path: "/about-us" },
    { title: "More", path: "/contact-us" },
  ];

  return (
    <header className="text-base font-bold   lg:text-sm">
      <div
        className={`bg-black text-white items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static ${
          state ? "h-full fixed inset-x-0" : ""
        }`}
      >
        <div className="flex items-center justify-between py-3 lg:py-5 lg:flex-row lg:items-center">
          <Link to="/">
            <img
              src="https://cdn.pixabay.com/photo/2022/09/18/07/41/logo-7462411_1280.png"
              width={0}
              height={50}
              alt="Float UI logo"
            />
          </Link>

          <div className="flex items-center gap-x-6">
            <div className="lg:hidden">
              <button className="text-white" onClick={() => setState(!state)}>
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div
              className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${
                state ? "" : "hidden"
              }`}
            >
              <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
                {navigation.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <Link to={item.path} className="block text-white">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
                {isAuthenticated ? (
                  <AvatarMenue avatar={profile && profile.avatar} />
                ) : (
                  <div className="absolute top-10 right-4 mt-3 mr-80 lg:mt-0">
                    <Link to="/login" className="block text-white">
                      Log in
                    </Link>
                  </div>
                )}
              </ul>
            </div>

            {/* Sub-navigation */}
            <nav className="border-b border-gray-700">
              <ul className="flex items-center gap-x-3 max-w-screen-xl mx-auto px-4 overflow-x-auto lg:px-8">
                {submenuNav.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className={`py-1 border-b-2 border-transparent hover:border-blue-500 transition-all duration-200 
    ${window.location.pathname === item.path ? "border-blue-500" : ""}`}
                    >
                      <Link
                        to={item.path}
                        className="block py-2 px-3 rounded-lg text-white hover:bg-gray-800 duration-150"
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
