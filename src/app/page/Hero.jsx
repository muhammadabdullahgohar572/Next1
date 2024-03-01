import Image from "next/image";
import hero from "../assets/img/Hero/download (6).jpeg";
const Hero = () => {
  return (
    <>
      
        
          <Image
            src={hero}
            alt=""
            className="sm:ml-[30%] ml-[10%] sm:w-[40%] w-[80%] h-[100px] sm:h-[200px]"
            srcset=""
          />
      
        <br />
        <br />
        <div className=" text-center align-middle  ">
          <div className="">
            <span className="text-red-600  font-extrabold text-2xl ">
              Find Your <span className="bg-yellow-400 text-white">Future</span>
              Today!
            </span>
            <br />
          </div>
            <div className="mt-3 p-3 sm:p-0">
              <p>Explore your options and make informed decisions with our</p>
              <p>
                comprehensive guide to universities around the world. Discover
              </p>
              <p>
                top-ranked institutions, explore diverse programs, and connect
              </p>
              <p>
                with like-minded individuals to build your academic future. With
              </p>
              <p>
                easy-to-use search tools, in-depth profiles, and trusted ratings
              </p>
              <p>
                and reviews, we provide everything you need to make the right
              </p>
              <p>
                choice for your academic journey. Start your search today and
                find
              </p>
              <p> your perfect fit!</p>
            </div>
        </div>
      
    </>
  );
};

export default Hero;
