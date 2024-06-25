import { Link } from "react-router-dom";
import Logo from "/LCE.jpg";
import { useNavigate } from "react-router-dom";
import { data } from "./constants";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between text-blue text-xl  items-center w-screen">
      <img
        src={Logo}
        alt="LCE Logo"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
        className="w-[160px] h-[70px] m-8 "
      />

      <div className="flex font-semibold w-[50%] justify-between">
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
      <div>buttons</div>
    </div>
  );
};

export default Navbar;
