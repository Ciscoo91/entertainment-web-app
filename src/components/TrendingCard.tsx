import React from 'react'
import bookmarkedFull from "../assets/icon-bookmark-full.svg"
import bookmarkedEmpty from "../assets/icon-bookmark-empty.svg"
import iconCategoryMovie from "../assets/icon-category-movie.svg"

type TrendingCardProps = {
    title: string,
    year: number,
    rating: string,
    isBookmarked: boolean,
    thumbnail: string
}

const Bookmark = ({isBookmarked}: {isBookmarked: boolean}) => {
    return isBookmarked ? <img src={bookmarkedFull} alt="bookmaked icon" /> : <img src={bookmarkedEmpty} alt="bookmaked icon" />
}

export default function TrendingCard({title, year, rating, isBookmarked, thumbnail}: TrendingCardProps) {
  return (
    <div className='relative flex flex-col justify-end'>
        <span className='rounded-xl w-8 h-8 absolute rounded-full grid place-items-center t-2 z-10'>
            <Bookmark isBookmarked={isBookmarked}/>
        </span>
        <img src={thumbnail} alt="" className='w-full h-full' />
        <div>
            <p className='text-secodary'><span>{year}</span> ● <img src={iconCategoryMovie} alt="" /> {} ● {rating}</p>
            <h3>{title}</h3>
        </div>
    </div>
  )
}
