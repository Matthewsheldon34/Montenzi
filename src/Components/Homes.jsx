import montenzic from "../assets/montenzic.png"
import {NavLink} from "react-router"
function Home(){
    return(
        <>
        <div>
          <header>
<nav className=" space-x-0.5 p-4 w-auto flex justify-between  bg-amber-900 rounded">

    <div className="logo flex space-x-0.5 p-0 items-center justify-center w-auto">
<a className="flex space-x-0.5 p-0 items-center justify-center gap-5">
    <img src={montenzic} alt="montenzi" className="h-20 w-20 rounded-full" />
    <span className="text-2xl font-sans font-bold text-white">Montenzi</span>
</a>
    </div>

  <ul className="w-auto grid items-center gap-5 p-4 lg:flex md:flex">
  <li>
    <NavLink 
      to="/" 
      className={({ isActive }) => 
        `font-normal ${isActive ? 'text-gray-200 font-bold text-xl' : 'text-gray-200 text-xl' }`
      }
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/collection" 
      className={({ isActive }) => 
        `font-normal ${isActive ? 'text-gray-200  font-bold  ' : 'text-gray-200 text-xl'}`
      }
    >
      Collections
    </NavLink>
  </li>
  <li>
    <NavLink 

      
      className={({ isActive }) => 
        `font-normal ${isActive ? 'text-gray-200  font-bold ' : 'text-gray-200 text-xl'}`
      }
    >
      Contact
    </NavLink>
  </li>
  <li>
    <NavLink 
     
      className={({ isActive }) => 
        `font-normal ${isActive ? 'text-gray-500 font-bold' : 'text-gray-200 text-xl'}`
      }
    >
      Message
    </NavLink>
  </li>
</ul>


</nav>
          </header>




<div className="mt-3 px-5 py-5 space-x-0.5  bg-linear-to-r from-emerald-700 via-teal-600 to-purple-700 animate-gradient"> 
  <section className="space-x-1.5 p-5 mt-5">
    <div>
      <article className="justify-center items-items p-5 space-x-0.5 flex w-auto">
    <h1 className="text-3xl font-bold font-mono text-center bg-linear-to-r from-orange-700 via-red-600 to-pink-700 bg-clip-text text-transparent">"Elevate Your Everyday Style with Montenzi"<br></br><span className=" bg-clip-text   text-transparent bg-linear-to-r from-yellow-400 ">(Alternative: "Redefining Casual Elegance: Discover Montenzi")</span>
</h1>
      </article>
<div className=" p-5 space-x-0.5 w-auto justify-center items-center relative mx-auto text-center">
  <h2 className="text-3xl font-sans font-extrabold items-center p-2 bg-linear-to-r from bg-purple-400 to-fuchsia-100 bg-clip-text  text-transparent  ">Who We Are</h2>
  <p className="text-xl font-sans font-normal items-center p-2 bg-linear-to-r from-gray-300 to-red-300 bg-clip-text text-transparent ">
    Montenzi is a modern lifestyle and fashion brand dedicated to providing a curated selection of premium apparel and footwear.
    We bridge the gap between everyday comfort and contemporary style, serving as your go-to destination for versatile wardrobe staples.
    From cozy jumpers and stylish shoes to an extensive lineup of relaxed casual wear,
    Montenzi equips you to step out with confidence, no matter the occasion.
  </p>
</div>
<div  className=" p-5 space-x-0.5 w-auto justify-center items-center relative mx-auto text-center">
  <h1 className="text-3xl font-sans font-extrabold items-center p-2 bg-linear-to-r from-yellow-800 to-purple-800 bg-clip-text text-transparent ">Brand Description</h1>
  <p className="text-xl font-sans font-normal items-center p-2 bg-linear-to-r from-yellow-900 to-purple-900 bg-clip-text text-transparent  ">
    At Montenzi, we believe that what you wear is an extension of who you are.
    Our collections are thoughtfully designed for the modern individual who values both aesthetics and practicality.
      We specialize in high-quality clothing, footwear, and seasonal jumpers crafted from durable, 
      breathable fabrics that feel as good as they look. Whether you're dressing down for a relaxed weekend,
    running errands, or looking for that perfect everyday casual piece,
        Montenzi offers effortlessly chic options tailored to your lifestyle.
  </p>
</div>
<div className=" p-5 space-x-0.5 w-auto justify-center items-center relative mx-auto text-center">
  <h1 className="text-3xl font-sans font-extrabold items-center p-2 bg-linear-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent ">What We Believe In (Core Values)</h1>
  <p className="text-2xl font-bold font-mono text-white p-5 mt-2">
    Uncompromising Quality:<span className=" text-center text-xl font-sans font-normal items-center p-2 bg-linear-to-r from-gray-900 to-gray-900 bg-clip-text text-transparent "> We believe in crafting and sourcing pieces that last,
    ensuring top-tier fabrics, strong stitching, and durable footwear. </span></p><br></br>{" "}
      <p className="text-2xl font-bold font-mono text-white p-5 mt-2 text-center">Everyday Comfort:<span className="text-xl font-sans font-normal items-center p-2 bg-linear-to-r from-gray-900 to-gray-900 bg-clip-text text-transparent ">
        Style should never come at the expense of comfort.
        We believe you should feel relaxed and free in everything you wear.</span> </p><br></br>
        <p className="text-2xl font-bold font-mono text-white p-5 mt-2 text-center">Versatility:
          <span className="text-xl   text-center font-sans font-normal items-center p-2 bg-linear-to-r from-gray-900 to-gray-900 bg-clip-text text-transparent ">
We champion wardrobe flexibility—pieces that can easily transition from day to night,
          
          indoor comfort to outdoor adventure. </span></p>{" "}<br></br>
        <p className="text-2xl font-bold font-mono text-white p-5 mt-2">Inclusivity & Confidence:<span className="text-xl text-center mx-auto font-sans font-normal items-center p-2 bg-linear-to-r from-gray-900 to-gray-900 bg-clip-text text-transparent ">
          Fashion is for everyone.
          We believe our clothes should empower you to express your unique personality boldly.</span> </p>
</div>

<div  className=" p-5 space-x-0.5 w-auto justify-center items-center relative mx-auto text-center">
  <h1 className="text-2xl font-sans font-extrabold items-center p-2 bg-linear-to-r from-orange-800 to-green-800 bg-clip-text text-transparent ">Our Aim (Mission)</h1>
  <p className="text-xl font-sans font-normal items-center p-2 bg-linear-to-r from-orange-900 to-green-900 bg-clip-text text-transparent">
Our aim is to become a trusted household name in contemporary casual fashion by continuously delivering trend-conscious,
durable, and affordable clothing and footwear.
  We strive to make shopping seamless and inspiring,
  helping our customers build a functional, stylish wardrobe that stands the test of time.
  </p>
</div>
    </div>
  </section>
  
      </div>
        </div>
        
        </>
    )
}
export default Home