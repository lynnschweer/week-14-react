import downloadImage from "./assets/download-1.jpg";

export default function SlideThumbnail({slide} :{order: number, image: string}) {
    return (
    <>
  <span>{slide.order}</span>
<img src={slide.image} onClick={()=>alert("Selected!")}/>
    </>
 
    )
  }