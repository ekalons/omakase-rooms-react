import "./Home.css";

import Item from "../Item/Item";
import MapItem from "../MapItem/MapItem";

import Chef from "../../assets/chef.jpeg";
import Room from "../../assets/room.jpeg";
import Serving from "../../assets/serving.jpeg";

const Home = () => {
  return (
    <div className="Home">
      <div className="HomeItemsContainer">
        <Item
          title="Omakase"
          description='"I leave it up to you" which means you are letting the chef decide what to serve. They will plan the dishes and adjust based on your reactions'
          backgroundImg={Serving}
          backgroundColor="#F3EEE8"
          photoLeft={false}
          first={true}
        />
        <Item
          title="Rooms"
          description="Omakase restaurants are typically referred to as rooms, due to their limited size. They offer a quiet and intimate dining experience."
          backgroundImg={Room}
          backgroundColor="#F8F7F4"
          photoLeft={true}
          first={false}
        />
        <Item
          title="Counter"
          description="Dishes are usually served in counters. It allows the chef to accurately manage food temperature as well as to observe your reactions"
          backgroundImg={Chef}
          backgroundColor="#F3EEE8"
          photoLeft={false}
          first={false}
        />
        {window.innerWidth > 720 && <MapItem backgroundColor="#F8F7F4" />}
      </div>
    </div>
  );
};

export default Home;
