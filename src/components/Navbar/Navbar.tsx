import { Link } from "react-router-dom";
import Logo from "/LCE.jpg";
import { useNavigate } from "react-router-dom";
import { data } from "./constants";
import { Button } from "../ui/button";
import useMediaQuery from "../../hooks/useMediaQuery";
const Navbar = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(max-width:800px)");
  return (
    <div className="flex justify-around text-xl  items-center w-full">
      <img
        src={Logo}
        alt="LCE Logo"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
        className={`m-2 ${
          isDesktop ? "w-[30vw] h-[21vh]" : "w-[12vw] h-[11vh]"
        }`}
      />
      {/* Dummy */}
      <div className="flex font-semibold gap-x-12 pl-10 text-blue">
        {data.map((data) => (
          <div>
            {data.title === "About" && data.title}
            {data.title !== "About" && (
              <Link title={data.title} to={data.route}>
                {data.title}
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="flex pr-8 gap-x-2">
        <Button variant="ghost" className="text-outlinedButtoncolor w-[6vw]">
          Login
        </Button>
        <Button className="bg-gradient-to-r from-orange-500 to-orange-400 w-[4.5vw]">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
