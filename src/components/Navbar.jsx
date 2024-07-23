import React from "react";

const Navbar = () => {
    return (
        <div className="bg-orange-400 flex justify-between items-center">
            {/* logo */}
            <div>
                <h1 className="text-bold text-white text-2xl mx-4 p-4 font-bold">
                    Grow Habit
                </h1>
            </div>
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
                <button className="bg-white font-semibold px-8 py-2 rounded-full text-orange-400 hover:text-black">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
