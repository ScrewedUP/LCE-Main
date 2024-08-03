import { Link } from "react-router-dom";
import Logo from "/LCE.jpg";
import { useNavigate } from "react-router-dom";
import { data } from "./constants";
import { Button } from "../ui/button";
import useMediaQuery from "../../hooks/useMediaQuery";
const Navbar = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width:1200px)");
  return (
    <div className="flex justify-between text-xl  items-center w-screen">
      <img
        src={Logo}
        alt="LCE Logo"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
        className="w-[160px] h-[70px] m-8 "
      />

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
      <div className="flex pr-8 gap-x-3">
        <Button
          variant="outline"
          className="border-orange-500 border-2 text-outlinedButtoncolor w-[6vw]"
        >
          Apply Now
        </Button>
        <Button className="bg-gradient-to-r from-orange-500 to-orange-400 w-[4.5vw]">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
