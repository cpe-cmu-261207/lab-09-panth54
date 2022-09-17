import Head from "next/head";
import Navbar from "../components/Navbar";

export default function experience() {
  return (
    <div>
      <Head>
        <title>Experience</title>
      </Head>

      <body>
        <Navbar />
        <div className="container1">
          <h1>Project Experience</h1>
          <div className="project-container">
            <div className="image-container">
              <h2>Website development</h2>
              <img src="images/undraw_web_development_light.svg" alt="" />
            </div>
            <div className="image-container">
              <h2>2D Game</h2>
              <img src="images/undraw_gaming_light.svg" alt="" />
            </div>
            <div className="image-container">
              <h2>programming</h2>
              <img src="images/undraw_programming_light.svg" alt="" />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
