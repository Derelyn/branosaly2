// ** import components
import HomeLeft from "@/views/pages/home/HomeLeft";
import HomeRight from "@/views/pages/home/HomeRight";

const Home = () => {
  return (
    <div className="m-auto p-4 md:p-10 lg:p-20 md:flex md:text-left text-center items-center">
      <HomeRight />
      <HomeLeft />
    </div>
  );
};

export default Home;
