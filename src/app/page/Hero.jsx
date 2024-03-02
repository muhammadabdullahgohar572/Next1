import Image from "next/image";
import hero from "../assets/img/Hero/download (6).jpeg";
const Hero = () => {
  return (
    <>


      {" "}
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="absolute -z-30">
        <Image
          src={hero}
          alt=""
          className="sm:ml-[30%] ml-[10%]  sm:w-[100%] w-[80%] h-[200px] sm:h-[200px]"
          srcset=""
        />
      </div>
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
        {/* text */}
        <br />
        <br /> <br />
        <br /> <br />
        <br />
        <div className="mt-3 p-3 sm:p-0">
          <p>Explore your options and make informed decisions with our</p>
          <p>comprehensive guide to universities around the world. Discover</p>
          <p>top-ranked institutions, explore diverse programs, and connect</p>
          <p>
            with like-minded individuals to build your academic future. With
          </p>
          <p>
            easy-to-use search tools, in-depth profiles, and trusted ratings
          </p>
          <p>and reviews, we provide everything you need to make the right</p>
          <p>
            choice for your academic journey. Start your search today and find
          </p>
          <p> your perfect fit!</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
