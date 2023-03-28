import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../shared/cookies";

const FalseGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  return;
};

export default FalseGuard;
