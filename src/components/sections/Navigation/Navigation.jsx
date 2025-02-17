import Yadora from "../../../assets/logo.svg";
import { links } from "../../../utils/constants";
import Hamburger from "./Hamburger";

function Navigation() {
    return (
        <section className="flex justify-between">
            <nav className="flex items-center">
                <a href="#">
                    <img
                        src={Yadora}
                        alt="Yadora logo"
                        className="inline-block mr-8 h-7"
                    />
                </a>

                <ul className="inline-flex gap-8 font-medium">
                    {links.map((link) => (
                        <li key={link}>
                            <a
                                href="#"
                                className="lg:block hidden text-primary-500 xl:text-lg hover:text-accent-500 transition-all duration-100"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <nav className="lg:flex items-center gap-8 hidden">
                <a
                    href="#"
                    className="font-medium text-primary-500 xl:text-lg hover:text-accent-500 transition-all duration-100"
                >
                    Sign in
                </a>
                <button className="bg-primary-500 hover:bg-accent-500 px-8 hover:px-9 py-4 rounded-2xl text-white xl:text-lg transition-all duration-200">
                    Get Started
                </button>
            </nav>

            <Hamburger />
        </section>
    );
}

export default Navigation;