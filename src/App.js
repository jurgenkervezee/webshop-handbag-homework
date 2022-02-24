import React from 'react';
import './App.css';
import NavButton from "./components/NavButton";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand1 from './assets/brand.png';
import ourStory from './assets/our_story.png';
import HandBagFrame from "./components/HandBagFrame";
import Tile from "./components/Tile";

function App() {
    return (<div>
        <h1>Handbags & Purses</h1>

        <nav>
            <NavButton buttonContent="To the collection"/>
            <NavButton buttonContent="Shop all bags"/>
            <NavButton buttonContent="Pre-order" disabled={true}/>
        </nav>
        <main>
            <HandBagFrame price={"€ 400,-"} image={bag1} description={"Handy Bag"} nameImage={"Bag_1"}
                          seller={"Best Seller"}/>
            <HandBagFrame price={"€ 250,-"} image={bag2} description={"Stylisch Bag"} nameImage={"Bag_2"}
                          seller={"Best Seller"}/>
            <HandBagFrame price={"€ 300,-"} image={bag3} description={"Simple Bag"} nameImage={"Bag_3"}
                          seller={"New Collection"}/>
            <HandBagFrame price={"€ 150,-"} image={bag4} description={"Trendy Bag"} nameImage={"Bag_4"}
                          seller={"New Collection"}/>
        </main>
        <footer>
            <Tile>
                <h2>The brand</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum auctor ante at auctor.
                    Vivamus in tellus ligula. Nulla ac arcu eu neque cursus pulvinar et in odio.
                </p>
                <p>
                    Suspendisse arcu sem, sagittis vitae felis ac, faucibus pellentesque arcu. Praesent placerat,
                    arcu congue egestas porttitor, nibh purus faucibus est, eget venenatis enim eros molestie tellus.
                </p>
            </Tile>
            <Tile>
                <img src={brand1} alt="brand"/>
            </Tile>
            <Tile>
                <img src={ourStory} alt="ourStory"/>
            </Tile>
            <Tile>
                <h2>Our story</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum auctor ante at auctor.
                    Vivamus in tellus ligula. Nulla ac arcu eu neque cursus pulvinar et in odio.
                </p>
            </Tile>
        </footer>
    </div>);
}
export default App;



