import Image from 'next/image'
import homeImg from 'public/home.jpg'

export default function Home() {
  return (
  <div>
    Home Page
    <Image 
      src={homeImg}
      alt="car factory"
    />
  </div>
  )
  
}
