import axios from "axios";
import { useContext, useEffect, useState } from "react";
import VideogameCard from "../component/VideogameCard";
import LoaderContext from "../context/LoaderContext";


function HomeSbeam() {

    const [videogames, setVideogames] = useState([])
    const { setIsLoading } = useContext(LoaderContext)


    function fetchVideogames() {
        console.log("caricamento dei videogames")
        setIsLoading(true)
        axios
            .get(import.meta.env.VITE_API_URL)
            .then((response) => {
                setVideogames(response.data.data)} )
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false))


    }

    useEffect(fetchVideogames, [])

    return (

        <>
            <img src="/public/metal-gear-header.png" alt="metal-gear-jumbo" className="img-fluid w-100" />
            <div className="container">
                <h2 className="mt-5 mb-4">Benvenuti su Sbeam</h2>
                {
                    videogames.map((videogame) =>
                        <VideogameCard key={videogame.id} videogame={videogame} />)
                }
            </div>

        </>
    )
}

export default HomeSbeam;