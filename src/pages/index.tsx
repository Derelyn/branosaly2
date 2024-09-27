// ** import components
import HomeLeft from "@/views/pages/home/HomeLeft";
import HomeRight from "@/views/pages/home/HomeRight";

const Home = () => {
  return (
    <div className="my-10 items-center p-4 text-center md:m-auto md:flex md:p-10 md:text-left lg:p-20">
      <HomeRight />
      <HomeLeft />
    </div>
  );
};

export default Home;
