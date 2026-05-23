import logo from "../assets/Netflix_Logo_PMS.png";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { removeUser } from "../redux/slices/userSlice";
import { auth } from "../utils/firebase";
import { toggleGptSearch } from "../redux/slices/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
    } catch (error) {
      console.log(error);
    }
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  return (
    <>
      <div className="absolute flex justify-between items-center px-10 w-full z-10">
        <div className="img-wrapper py-2">
          <img src={logo} alt="logo" className="w-40" />
        </div>
        <div className="flex justify-end items-center">
          <button
            className="px-3 py-1 mr-3 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700"
            onClick={handleGptSearch}
          >
            GPT Search
          </button>
          <select className="mr-3 border border-gray-800 bg-gray-800 text-white py-1 px-3 rounded">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <img src={user?.photoURL} alt="profile-img" className="w-12 pr-2" />
          <div className="font-semibold border-r border-gray-500 pr-3 mr-3 text-white">
            {user?.displayName}
          </div>
          <button
            className="bg-gray-800 px-3 py-1 text-white rounded cursor-pointer"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
