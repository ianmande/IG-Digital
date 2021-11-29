export const sortByDate = (array: any[]) =>
  array.sort(
    (a, b) => new Date(b.create_at).getTime() - new Date(a.create_at).getTime()
  )
