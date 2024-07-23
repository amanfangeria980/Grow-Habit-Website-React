import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-orange-400 flex justify-between items-center">
            {/* logo */}
            <Link to="/">
                <h1 className="text-bold text-white text-2xl mx-4 p-4 font-bold">
                    Grow Habit
                </h1>
            </Link>
            <div className="flex mr-16 gap-16">
                <ul className="flex gap-12 items-center">
                    <li className="text-white font-medium hover:text-black">
                        Home
                    </li>
                    <li className="text-white font-medium hover:text-black">
                        About
                    </li>
                    <li className="text-white font-medium hover:text-black">
                        Team
                    </li>
                    <li className="text-white font-medium hover:text-black">
                        Take a Challenge
                    </li>
                </ul>
                <Link to={"/login"}>
                    <button className="bg-white font-semibold px-8 py-2 rounded-full text-orange-400 hover:text-black">
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
