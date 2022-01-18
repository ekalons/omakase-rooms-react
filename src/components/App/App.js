import './App.css';
import Header from '../Header/Header';
import Item from '../Item/Item';

// Importing images
import Chef from '../../assets/chef.jpeg';
import Room from '../../assets/room.jpeg';
import Serving from '../../assets/serving.jpeg';

function App() {
    return (

        <div className="App">
            <Header/>
            <div className="app__itemsContainer">
                <Item
                    title="Omakase"
                    description='"I leave it up to you" which means you are letting the chef decide what to serve. They will plan the dishes and adjust based on your reactions'
                    backgroundImg={Serving}
                    backgroundColor="#F3EEE8"
                    photoLeft={false}

                />
                <Item
                    title="Rooms"
                    description="Omakase's are typically small restaurants and most times on the counter. They offer an intimate dining experience"
                    backgroundImg={Room}
                    backgroundColor="#F8F7F4"
                    photoLeft={true}

                />
                <Item
                    title="Counter"
                    description="They are usually in counters because the chef can manage the temperature of the food and ask you whether you like the dishes, in order to decide what to serve next"
                    backgroundImg={Chef}
                    backgroundColor="#F3EEE8"
                    photoLeft={false}

                />
            </div>
        </div>
    );
}

export default App

