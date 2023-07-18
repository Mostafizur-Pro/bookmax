import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import { useAppDispatch } from "./redux/hook";
import { auth } from "./lib/firebase";
import { setLoading, setUser } from "./redux/feature/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
