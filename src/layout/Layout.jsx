import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../redux/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

const Layout = () => {
  const [loader, setLoader] = useState(true);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      setLoader(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loader) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Outlet />
    </>
  );
};

export default Layout;
