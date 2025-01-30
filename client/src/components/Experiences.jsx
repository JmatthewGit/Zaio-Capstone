import React from "react";
import "../styles/Experiences.css";
import InspirationCard from "../components/cards/InspirationCard";
import DiscoverCard from "../components/cards/DiscoverCard";

const Experiences = () => {
  return (
    <div className="home_sections">
      <div className="inspiration_title">
        <h1>Inspiration for your next trip</h1>
      </div>
      <div className="inspiration_cards">
        <InspirationCard
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-1207268935593686640/original/2f59d406-427d-4974-87ba-44eb47a7bd84.jpeg?im_w=1200&im_format=avif"
          title="Sandton City Hotel"
          distance="53 km away"
        />
        <InspirationCard
          src="https://a0.muscache.com/im/pictures/e3d779ff-b865-4bf5-ac44-3a89bad123d9.jpg?im_w=1200&im_format=avif"
          title="Joburg City Hotel"
          distance="168 km away"
        />
        <InspirationCard
          src="https://a0.muscache.com/im/pictures/miso/Hosting-805467029889491612/original/9aad1ab7-e8fb-400f-b874-a062ed122c27.jpeg?im_w=1200&im_format=avif"
          title="Woodmead Hotel"
          distance="30 km away"
        />
        <InspirationCard
          src="https://a0.muscache.com/im/pictures/ae4e22ac-f541-4ceb-baff-71c9a7f1ef3e.jpg?im_w=1200&im_format=avif"
          title="Hyde Park Hotel"
          distance="34 km away"
        />
      </div>

      <div className="discover_title">
        <h1>Discover Airbnb Experiences</h1>
      </div>
      <div className="discover_cards">
        <DiscoverCard
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-994282245271952100/original/21d9cb50-0a37-4275-87c9-61e8fb47acac.jpeg?im_w=720&im_format=avif"
          title="Things to do on your trip"
          text="Experiences"
        />
        <DiscoverCard
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-1242026032004087360/original/9dc2ec58-09a4-4044-89c8-f6f4d9bb5d8f.jpeg?im_w=720&im_format=avif"
          title="Things to do from home"
          text="Online Experiences"
        />
      </div>

      <div className="shop">
        <div className="gift_cards">
          <h1>
            Shop Airbnb
            <br />
            gift cards
          </h1>
          <button>Learn more</button>
        </div>
        <div className="shop_cards">
          <img
            src="https://s3-alpha-sig.figma.com/img/43b8/8762/e0a70df6eb554b492d0b7d2633a1ecb1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CvcxnIS48xAhCiMxtUupQ6y3SYf7b3R7WGU~1tKMs8NtmeBH5Q4whbcJliOzkt4mN8iHWkxggs8irmeTUYP1ruDoKmm360gLSIwSXXOxiFwwjOSOqdHxA0cdllaOtR5kPws32W2yBeHViTxX9N14qLSJKbsWf2yKrla1jM7osWcFGIKrf4BTfCBtfUOYWFNypz4ZQOtI8XWylPxImbRRwHmqrbaU222mvYCJlp9SJGc-4uoVrK7v76wljkrmfCjMoe5gDttMjFCZwB2LzGCvrJPHNrR8EQXEKxw9n8xibjwjVppOIOQebDWtwgpT2BtoRbokbmjRKGfo6cC8cS4O5w__"
            alt="gift cards"
          />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
