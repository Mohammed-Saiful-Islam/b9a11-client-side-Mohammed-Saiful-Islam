import React from 'react';

const Banner = () => {
    return (
        <div>
<div className="carousel w-full h-96">
  <div id="item1" className="carousel-item w-full">
    <img src="https://img.freepik.com/free-vector/dhaka-city-bangladesh-top-landmarks-white-background-vector-illustration-business-travel-tourism-concept-with-modern-buildings-image-banner-web-site_596401-423.jpg?w=740&t=st=1714460770~exp=1714461370~hmac=78b77555a98a0d1426de6445e9cbbdb7882a21ad1387ed2a044e2339433e2c63" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.ytimg.com/vi/BwWROjBRMfI/maxresdefault.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://i.pinimg.com/originals/31/d3/a5/31d3a56b42e73765c4faad72bac4a8a9.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://i1.wp.com/ahappytreat.com/wp-content/uploads/2019/07/WashingtonDCAttractionsUpload.jpg?fit=2364%2C1773&ssl=1" className="w-full" />
  </div>
  <div id="item5" className="carousel-item w-full">
    <img src="https://media1.thrillophilia.com/filestore/0p3f1aqboa2y1n8d139i2o4bjamq_1573727812_shutterstock_1283691793.jpg.jpg?w=1440&dpr=2" className="w-full" />
  </div>
  <div id="item6" className="carousel-item w-full">
    <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/09/23094646/Places-to-visit-in-Australia-t.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
  <a href="#item5" className="btn btn-xs">5</a>
  <a href="#item6" className="btn btn-xs">6</a>
</div>            
        </div>
    );
};

export default Banner;