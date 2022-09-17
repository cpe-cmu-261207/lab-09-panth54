import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Resume Website</title>
      </Head>

      <Navbar />
      <div className="container1">
        <div className="profile-container">
          <h1>Phanthat Muenprap</h1>
          <img src="images/profilepic.jpg" alt="" />
          <h2>
            &nbsp;&nbsp;&nbsp;&nbsp; Hi, my name is Phanthat. I'm graduated from
            The Prince Royal's College. I have been studying in Chiangmai
            University for 2 years majoring in Computer Engineering. I'm
            interested in programming.
          </h2>
        </div>
      </div>
    </div>
  );
}
