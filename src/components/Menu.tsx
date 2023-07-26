import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg"
import menuBookmarkIcon from "../assets/icon-nav-bookmark.svg"
import menuHomeIcon from "../assets/icon-nav-home.svg"
import menuMoviesIcon from "../assets/icon-nav-movies.svg"
import menuSeriesIcon from "../assets/icon-nav-tv-series.svg"
import avatar from "../assets/image-avatar.png"
import Layout from './Layout'

export default function Menu() {
  return (
    <nav className='bg-primary md:rounded-md w-full h-14 grid place-items-center'>
        <Layout extraClasses='flex justify-between items-center h-full'>
            <div className=''>
                <Link to="/">
                    <img src={logo} alt="website logo" />
                </Link>
            </div>
            <div className='grid grid-cols-4 gap-x-4 justify-between'>
                <Link to="/">
                    <img src={menuHomeIcon} alt="navbar link to home component" />
                </Link>
                <Link to="/movies">
                    <img src={menuMoviesIcon} alt="navbar link to movies" />
                </Link>
                <Link to="/series">
                    <img src={menuSeriesIcon} alt="navbar link to tv series" />
                </Link>
                <Link to="/bookmarked">
                    <img src={menuBookmarkIcon} alt="navbar link to bookmarked medias" />
                </Link>
            </div>
            <div className='rounded-full border-2 border-white w-8 h-8'>
                <img src={avatar} alt="Image avatar representing the user" className='h-full'/>
            </div>
        </Layout>
    </nav>
  )
}
