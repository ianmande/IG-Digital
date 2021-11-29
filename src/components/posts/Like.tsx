// Vendors
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { likeToPosts } from 'reducers/postSlice'
import { ViewPost } from 'types/app'

export const Like = (props: ViewPost) => {
  const dispatch = useDispatch()
  const [liked, setLiked] = useState(false)

  const handleClick = useCallback(() => {
    setLiked((prev) => !prev)
    dispatch(likeToPosts(props))
  }, [dispatch, props])

  return (
    <div
      className={`heart ${liked && 'is_liked'}`}
      onClick={() => handleClick()}
    ></div>
  )
}
