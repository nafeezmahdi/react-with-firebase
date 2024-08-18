import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p>Loading User Data....</p>;
  }

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
}
