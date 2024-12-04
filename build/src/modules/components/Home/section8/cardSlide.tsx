import Image from "next/image"

interface props {
  text: string
  title: string
  image: string
}
export const CardSlide = ({ text, image, title }: props) => {
  return (
    <div className='cardSlide'>
      <Image src={image} alt='movil' width={320} height={530} />
      <div className="box-r">
        <p className="sub-title">{title}</p>
        <p className="body-regular">{text}</p>
      </div>
    </div>
  )
}
