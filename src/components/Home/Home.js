import { useEffect, useState } from "react";
import { getGames } from "../services/gameService";
import { GamesList } from "./GamesList/GamesList";


export const Home = () => {
    const [games, setGames] = useState([]);


    useEffect(() => {
        getGames()
            .then(res => {
                setGames(res);
            });
    },[]);


    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                
                {games.length > 0 ? games.map(x => <GamesList key={x._id} {...x} />) : <p className="no-articles">No games yet</p>}
            
            </div>
        </section>
    );
};