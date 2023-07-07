import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import searchIcon from "../assets/icon-search.svg"
import Layout from "../components/Layout";

const Home = () => {
    return (
        <main className="bg-dark min-h-full flex flex-col items-center">
            <Menu />
            <Layout extraClasses="flex flex-col items-center">
                <form className="w-full bg-dark flex justify-between items-center">
                        <label htmlFor="search grid place-items-center">
                            <img src={searchIcon} alt="search icon for form input" />
                        </label>
                        <input type="text" id="search" placeholder="Search for movies or TV series" className="py-4 text-white w-10/12 bg-dark outline-none caret-danger cursor-pointer"/>
                </form>
                <Outlet />
            </Layout>
        </main>
    );
}
 
export default Home;