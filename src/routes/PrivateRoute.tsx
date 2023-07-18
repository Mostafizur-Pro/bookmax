import { ReactNode } from "react";
import PreLoader from "../components/common/PreLoader";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

interface IProps {
  children: ReactNode;
}
export default function PrivateRoute({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const location = useLocation();
  if (isLoading) {
    return <PreLoader />;
  }
  if (!user?.email && !isLoading) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
