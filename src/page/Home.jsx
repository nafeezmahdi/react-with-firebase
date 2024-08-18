import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  function handleLogout() {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signed Out");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (loading) {
    return <p>User info loading......</p>;
  }

  return (
    <>
      <div>Welcome, {user.email}</div>
      <button
        className="bg-black text-white rounded p-1"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
}
