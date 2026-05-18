import logo from "../assets/Netflix_Logo_PMS.png";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { removeUser } from "../redux/slices/userSlice";
import { auth } from "../utils/firebase";

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

  return (
    <>
      <div className="absolute flex justify-between items-center px-10 w-full z-10">
        <div className="img-wrapper py-2">
          <img src={logo} alt="logo" className="w-40" />
        </div>
        <div className="flex justify-end items-center">
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
