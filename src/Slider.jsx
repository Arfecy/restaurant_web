
import { useEffect, useState } from "react";
const dataSlider = [
  {
    src: "/public/restaurant 1.jpg",
    id: 1
  },
  {
    src: "/public/restaurant 2.jpg",
    id: 2
  },
  {
    src: "/public/restaurant 3.jpg",
    id: 3
  },

]
const numberOfSliderItems = dataSlider.length




function Slider() {

  const [activeSlideIndex, setActiveSlideIndex] = useState(1)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }
      , 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlideIndex(prevActiveSlide => prevActiveSlide < numberOfSliderItems ? prevActiveSlide + 1 : 1)
  }


  return (
    <div className="slider">


      {dataSlider.map((obj, index) => {
        return (
          <div key={obj.id} className={activeSlideIndex === index + 1 ? "slide active" : "slide"}>
            <img src={obj.src}></img>
          </div>
        )
      })}

    </div>

  )
}

export default Slider



// {dataSlider[activeSlideIndex - 1].src}