import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"


const Carrousel = () => {

  const slides = [
    { url: "../images/Apretasda.jpg" }, { url: "../images/TheBoxShow2.png" }, { url: "../images/272818903_472139811127597_7920857245264529836_n.jpg" }, { url:"../images/271937718_341552151126544_6652940662681361521_n.jpg"}
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto relative group">
      <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full bg-center bg-cover duration-500"  ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"><BsChevronCompactLeft size={30} onClick={prevSlide} /></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" ><BsChevronCompactRight size={30} onClick={nextSlide} /></div>
    </div>
  )
}

export default Carrousel