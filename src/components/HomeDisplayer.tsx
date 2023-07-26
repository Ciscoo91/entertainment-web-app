import {useEffect, useState} from 'react'
import { Media } from '../types'
import TrendingCard from './TrendingCard'
import MediaCard from './MediaCard'
import axios from "axios"



export default function HomeDisplayer() {


    const [data, setData] = useState<Media[]>()
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>()

    const trendigMedia = data?.filter((media:Media) => media.isTrending)
    const recommendedMedia = data?.filter((media: Media) => !media.isTrending)

    useEffect(()=>{

        const fetchData = async () => {
            setIsLoading(true)
            setError(null);

            try {
                const response = await axios.get("http://localhost:3000/movies?_embed=thumbnails")
                setData(response.data)
                setIsLoading(false)
            } catch(error: any){
                setError(error)
            }
        }

        fetchData()

    },[])

    if(error){
        return <p>An error occured</p>
    }

    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <div className='flex flex-col justify-between w-screen mt-4'>
            <h2 className='text-white text-xl mb-4 pl-2'>Trending</h2>
            <div className={`flex overflow-x-scroll`}>
                {trendigMedia?.map((media: Media) => (
                    <TrendingCard 
                        key={media.id}
                        title={media.title}
                        thumbnails={media.thumbnails}
                        year={media.year}
                        isBookmarked={media.isBookmarked}
                        rating={media.rating}
                    />
                ))}
            </div>

            <h2 className='text-white text-xl my-6 pl-2'>Recommended for you</h2>
            <div className='grid grid-cols-2 gap-2 grid-rows-auto justify-items-center w-full'>
                {recommendedMedia?.map((media: Media) => ( 
                    <MediaCard 
                        key={media.id} 
                        title={media.title}
                        thumbnails={media.thumbnails}
                        year={media.year}
                        isBookmarked={media.isBookmarked}
                        rating={media.rating}
                        category={media.category}
                    />))
                }
            </div>
        </div>
    )
}
