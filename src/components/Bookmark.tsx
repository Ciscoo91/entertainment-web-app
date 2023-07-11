import bookmarkedFull from "../assets/icon-bookmark-full.svg"
import bookmarkedEmpty from "../assets/icon-bookmark-empty.svg"

export const Bookmark = ({isBookmarked}: {isBookmarked: boolean}) => {

    return <span className='rounded-xl bg-transparency w-8 h-8 absolute rounded-full grid place-items-center top-2 right-2 z-10'>
        {isBookmarked ? <img src={bookmarkedFull} alt="bookmaked icon" /> : <img src={bookmarkedEmpty} alt="bookmaked icon" />}
    </span>
}