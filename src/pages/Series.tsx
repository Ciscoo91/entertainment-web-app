import {useState, useEffect} from "react"
import axios from "axios"
import MediaCard from "../components/MediaCard"
import { Media } from "../types"

const Series = () => {
    const [data, setData] = useState<Media[] | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>()

    useEffect(()=>{

        const fetchData = async () => {
            setIsLoading(true)
            setError(null);

            try {
                const response = await axios.get("http://localhost:3000/movies?category=TV%20Series&_embed=thumbnails")
                setData(response.data)
                setIsLoading(false)
            } catch(error: any){
                setError(error)
            }
        }

        fetchData()

    },[])

    if(error){
        return <p className="text-white text-2xl">An error occured, couldn't fetch movies</p>
    }

    if(isLoading){
        <p className="text-white text-2xl">Loading...</p>
    }

    return ( 
        <div className='flex flex-col justify-between w-screen mt-4'>
            <h2 className='text-white text-xl my-6 pl-4'>Tv Series</h2>
            <div className='grid grid-cols-2 gap-2 grid-rows-auto justify-items-center w-full'>
                {data?.map((media: Media) => (
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
 
export default Series;