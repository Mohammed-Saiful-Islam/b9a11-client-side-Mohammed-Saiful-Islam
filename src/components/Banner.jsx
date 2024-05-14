
const Banner = () => {
    return (
        <div className='max-w-6xl mx-auto'>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1333547908/photo/smiling-woman-have-webcam-online-meeting-on-computer.jpg?s=2048x2048&w=is&k=20&c=2RzcfjnRKoeKSQjIpS-JT3Nw4R_amYO40lXA9huC724=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1340561120/photo/talking-and-working-on-video-calling.jpg?s=2048x2048&w=is&k=20&c=cBam4jDT1i9YYzv0auAcebj35xu1jY-LG7k-2-dRLsg=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1220226086/photo/on-laptop-diverse-people-collage-webcam-view-over-woman-shoulder.jpg?s=2048x2048&w=is&k=20&c=Y32nb9A6Wmh5-7PKo_v-u8Kruhhttbc9XZNIXegnnMg=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1300311961/photo/business-meeting-on-video-call-during-covid-19-lockdown.jpg?s=2048x2048&w=is&k=20&c=WtfQnnkc3Ts_64eLZHjfHrIuBRTiTVjua6f0xv0haD8=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>           
        </div>
    );
};

export default Banner;