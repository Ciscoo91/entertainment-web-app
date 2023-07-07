export type User = {
    id: number,
    username: string,
    email: string,
    bookmarks: number[]
}

enum category {
    "Movie",
    "TV Serie"
}

export type Media = {
    title: string,
    thumbnail: Thumbnail
    year: number,
    category: category,
    rating: string,
    isBookmarked: boolean,
    isTrending: boolean
}

export type Thumbnail = {
    trending?: {
      small: string,
      large: string,
    },
    regular: {
      small: string,
      medium: string,
      large: string
    }
}