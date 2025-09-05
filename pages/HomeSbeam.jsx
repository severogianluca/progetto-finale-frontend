import axios from "axios";
import { useEffect, useState } from "react";
import VideogameCard from "../component/VideogameCard";


function HomeSbeam() {

    const [videogames, setVideogames] = useState([])

    function fetchVideogames() {

        axios
            .get(import.meta.env.VITE_API_URL)
            .then((response) => setVideogames(response.data.data))
            .catch((err) => console.error(err))

    }

    useEffect(fetchVideogames,[])

    return (

        <>
            <h2>Benvenuti su Sbeam</h2>
            {
                videogames.map((videogame) =>
                <VideogameCard key={videogame.id} videogame={videogame}/>)
            }
        </>
    )
}

export default HomeSbeam;