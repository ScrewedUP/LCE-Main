import { Link } from "react-router-dom";
import Logo from "/LCE.svg";
import { useNavigate } from "react-router-dom";
import { data } from "./constants";
import { Button } from "../ui/button";
import useMediaQuery from "../../hooks/useMediaQuery";
const Navbar = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:1000px)");
  return (
    <div className="flex justify-around text-xl items-center">
      <img
        src={Logo}
        alt="LCE Logo"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
        className={`mt-4 ${
          isMobile ? "w-[50vw] h-[21vh]" : "w-[15vw] h-[15vh]"
        }`}
      />
      <div className="flex font-semibold text-blue">
        {data.map((data) => (
          <div className="mr-8" key={Math.random()}>
            {data.title === "About" && data.title}
            {data.title !== "About" && (
              <Link title={data.title} to={data.route}>
                {data.title}
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="flex ">
        <Button variant="ghost" className="text-outlinedButtoncolor">
          Login
        </Button>
        <Button className="bg-gradient-to-r from-orange-500 to-orange-400 ">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
