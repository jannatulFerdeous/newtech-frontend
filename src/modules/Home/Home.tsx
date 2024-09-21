//
import Support_Brand from "@components/Support_Brand";
import Choose from "./partials/Choose";
import Hero from "./partials/Hero";
import Latest_Blog from "./partials/Latest_Blog";

import Our_Service from "./partials/Our_Service";
import Welcome_sec from "./partials/Welcome_sec";
import Work_process from "./partials/Work_process";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Welcome_sec />
      <Choose/>
      <Our_Service/>
      <Work_process/>
      <Latest_Blog/>
      <Support_Brand/>
    </div>
  );
};

export default Home;
