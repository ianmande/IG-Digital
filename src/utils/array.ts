import { Post, ViewPost } from 'types/app'

export const sortByDate = (array: any[]) =>
  array.sort(
    (a, b) => new Date(b.create_at).getTime() - new Date(a.create_at).getTime()
  )

export const foundPost = (params: ViewPost, post: Post) =>
  params.image === post.image &&
  params.message === post.message &&
  params.author === post.author &&
  params.create_at === post.create_at

export const searchPosts = (textSerch: string, arrayToSearch: Post[]) => {
  const postsFound = arrayToSearch.filter(({ message, author }) => {
    const textToSerch = textSerch.toLowerCase()
    const authorFullName = `${author.name} ${author.surname}`.toLowerCase()

    return (
      message.toLowerCase().search(textToSerch) > -1 ||
      authorFullName.search(textToSerch) > -1
    )
  })

  return postsFound
}
