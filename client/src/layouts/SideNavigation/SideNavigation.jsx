import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { motion } from "motion/react";
import { SideNavigationContext } from "../../contexts/SideNavigationContext";

export const SideNavigation = () => {
  const { sideNavigationIsOpen } = useContext(SideNavigationContext);
  const linkClass =
    " block p-2 rounded-sm hover:bg-black hover:text-white duration-150";

  return (
    <motion.aside
      initial={{ x: "-130%" }}
      animate={{ x: sideNavigationIsOpen ? 0 : "-130%" }}
      transition={{ stiffness: 0 }}
      className=" fixed left-5 top-20 bg-white p-2 rounded-sm z-50"
    >
      <nav>
        <ul className=" space-y-5">
          <li>
            <Link to={"/"} className={linkClass}>
              <TrendingUpOutlinedIcon sx={{ fontSize: 40 }} />
            </Link>
          </li>

          <li>
            <Link to={"/movies"} className={linkClass}>
              <LocalMoviesOutlinedIcon sx={{ fontSize: 40 }} />
            </Link>
          </li>

          <li>
            <Link to={"/tv_shows"} className={linkClass}>
              <LiveTvOutlinedIcon sx={{ fontSize: 40 }} />
            </Link>
          </li>

          <li>
            <Link to={"/login"} className={linkClass}>
              <PersonOutlinedIcon sx={{ fontSize: 40 }} />
            </Link>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
};
