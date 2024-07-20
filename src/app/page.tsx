import Slider from "./Slider/page";
import Divider from "./Divider/page";
import Login from "./Typewriter/page";
import Video from "./Video/page";
import Review from "./Review/page";
import TrendingProducts from "./Cards/TrendingProducts";

export default async function Home() {



  return (
    <div className="">
      
      <div>
        <Slider />
      </div>
      <div>
      <TrendingProducts />
    </div>
     <div>
      <Divider />
    </div>
    
     <div>
      <Login />
    </div>
     <div>
      <Video />
    </div>
     <div><Review /></div>
     
    </div>
  );
}


