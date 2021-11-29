// Vendors
import { useState } from 'react'

export const Like = () => {
  const [liked, setLiked] = useState(false)
  return (
    <div
      className={`heart ${liked && 'is_liked'}`}
      onClick={() => setLiked((prev) => !prev)}
    ></div>
  )
}
