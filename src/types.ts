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
  id: number,
  title: string,
  thumbnails: Thumbnail[]
  year: number,
  category: "Movie" | "TV Serie",
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