import Head from "next/head";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />
      <div className="container1">
        <h1>Contact</h1>
        <div class="contact-container">
          <img src="images/profilepic.jpg" alt="" />
          <div className="contact-info">
            <p className="contact">
              <b>Name : </b>Phanthat Muenprap
            </p>
            <p className="contact">
              <b>Nickname : </b>Meepooh
            </p>
            <p className="contact">
              <b>Name : </b>Phanthat Muenprap
            </p>
            <b>Facebook : </b>
            <a
              href="https://www.facebook.com/profile.php?id=100003097961137"
              rel="noreferrer"
            >
              https://www.facebook.com/profile.php?id=100003097961137
            </a>
            <br />
            <b>Email : </b>
            <a href="mailto: phanthat_m@cmu.ac.th">phanthat_m@cmu.ac.th</a>
            <p className="contact">
              <b>Phone : </b>091-150-8847
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
