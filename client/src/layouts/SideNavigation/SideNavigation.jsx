import React, { useContext } from "react";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { SideNavigationContext } from "../../context/SideNavigationProvider";

export const SideNavigation = () => {
  const { sideNavigationIsOpen } = useContext(SideNavigationContext);

  return (
    <motion.aside
      initial={{ x: "-150%" }}
      animate={{ x: sideNavigationIsOpen ? 0 : "-150%" }}
      transition={{ stiffness: 0 }}
      className=" bg-[#F2F2F2] fixed top-20 left-5 h-[500px] p-2 rounded-md"
    >
      <nav>
        <ul className=" space-y-2">
          <li>
            <Link
              to={"/"}
              className=" block p-3 rounded-md hover:bg-black hover:text-white duration-150"
            >
              <TrendingUpOutlinedIcon sx={{ fontSize: 35 }} />
            </Link>
          </li>

          <li>
            <Link
              to={"/movies"}
              className=" block p-3 rounded-md hover:bg-black hover:text-white duration-150"
            >
              <LocalMoviesOutlinedIcon sx={{ fontSize: 35 }} />
            </Link>
          </li>

          <li>
            <Link
              to={"/tv_shows"}
              className=" block p-3 rounded-md hover:bg-black hover:text-white duration-150"
            >
              <LiveTvOutlinedIcon sx={{ fontSize: 35 }} />
            </Link>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
};
