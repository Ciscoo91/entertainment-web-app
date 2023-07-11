import { Bookmark } from './Bookmark'
import { Thumbnail } from '../types'
import iconCategoryMovie from "../assets/icon-category-movie.svg"

type MediaCardProps = {
    title: string,
    year: number,
    category: string,
    rating: string,
    isBookmarked: boolean,
    thumbnails: Thumbnail[]
}

export default function MediaCard({title, year, category, rating, isBookmarked, thumbnails}: MediaCardProps) {
  return (
    <div className="">
        <div className='rounded-lg w-[10.25rem] h-[6.875rem] relative mx-0 my-2'>
          <Bookmark isBookmarked={isBookmarked} />
          {thumbnails.map((thumb: Thumbnail, index) => (<img key={index} src={thumb.regular.small} alt="" className='w-full h-full absolute rounded-lg' />))}
        </div>
        <div className='flex flex-col z-10 '>
            <p className='text-secondary flex items-center w-full text-xs mt-2'>
              <span>{year} •</span>
              <img src={iconCategoryMovie} alt="" className='mx-2' /> 
              <span>{category}</span>
              <span className='pl-2'>• {rating}</span>
            </p>
        </div>
        <h4 className='text-white text-sm'>{title}</h4>
    </div>
  )
}
