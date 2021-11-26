// Vendors
interface ImageProps {
  source: string
  alt?: string
}

export const Image = ({ source, alt = '' }: ImageProps) => {
  return (
    <figure>
      <img src={source} alt={alt} />
    </figure>
  )
}
