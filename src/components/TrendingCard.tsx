import {Bookmark} from "./Bookmark"
import iconCategoryMovie from "../assets/icon-category-movie.svg"
import { Thumbnail } from '../types'

type TrendingCardProps = {
    title: string,
    year: number,
    rating: string,
    isBookmarked: boolean,
    thumbnails: Thumbnail[]
}


export default function TrendingCard({title, year, rating, isBookmarked, thumbnails}: TrendingCardProps) {
  return (
    <div className='relative rounded-lg flex flex-col justify-end bg-danger min-w-[15rem] min-h-[8.75rem] mx-2'>
        <Bookmark isBookmarked={isBookmarked}/>
        {thumbnails.map((thumb: Thumbnail, index) => (<img key={index} src={thumb.trending?.small} alt="" className='w-full h-full absolute rounded-lg' />))}
        <div className='flex flex-col z-10 px-2'>
            <p className='text-white grid grid-cols-6 items-center gap-x-4 w-full'><span>{year}</span> • <img src={iconCategoryMovie} alt="" /> • {rating}</p>
            <strong className='text-white'>{title}</strong>
        </div>
    </div>
  )
}
