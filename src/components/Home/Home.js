// General
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

// Style
import './Home.css';

// Pages
import Rooms from '../Rooms/Rooms';
import Etiquette from '../Etiquette/Etiquette';

// Components
import Header from '../Header/Header';
import Item from '../Item/Item';
import Footer from '../Footer/Footer';

// Importing images
import Chef from '../../assets/chef.jpeg';
import Room from '../../assets/room.jpeg';
import Serving from '../../assets/serving.jpeg';

const Home = () => {
    return (
        <div className="Home">
            <body>
            <Header/>
            <div className="HomeItemsContainer">
                <Item
                    title="Omakase"
                    description='"I leave it up to you" which means you are letting the chef decide what to serve. They will plan the dishes and adjust based on your reactions'
                    backgroundImg={Serving}
                    backgroundColor="#F3EEE8"
                    photoLeft={false}

                />
                <Item
                    title="Rooms"
                    description="Omakase restaurants are typically referred to as rooms, due to their limited size. They offer a quiet and intimate dining experience."
                    backgroundImg={Room}
                    backgroundColor="#F8F7F4"
                    photoLeft={true}

                />
                <Item
                    title="Counter"
                    description="Dishes are usually served in counters. It allows the chef to accurately manage food temperature as well as to observe your reactions"
                    backgroundImg={Chef}
                    backgroundColor="#F3EEE8"
                    photoLeft={false}

                />
                <Footer />
            </div>
            </body>
        </div>
    )
}

export default Home
