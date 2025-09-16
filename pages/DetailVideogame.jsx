import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideogameDetail from "../component/VideogameDetail";
import Loader from "../component/Loader";

function DetailVideogame() {


    const { id } = useParams()
    const [videogameDetail, setVideogameDetail] = useState(null)
    const  [isLoading, setIsLoading]  = useState(true)



    function fetchVideogame() {
        setIsLoading(true)
        axios
            .get(`${import.meta.env.VITE_API_URL}/${id}`)
            .then((response) => {
                console.log(response.data.data)
                setVideogameDetail(response.data.data)
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false))

    }

    useEffect(fetchVideogame, [])

    return (


        <>

            <div className="container">
                {isLoading ? <Loader/> :
                <div className="p-3 mb-4 mt-5 ">
                    <div>
                        <div>
                            <h2 className="card-title mb-3">{videogameDetail.name}</h2>
                        </div>
                        <div className="mb-5">
                            <img src="https://clan.fastly.steamstatic.com/images/32528477/0560229ab00c6083267f29fcfc0c8b27fadfd819.jpg"
                                alt="sales" className=" w-100" />
                        </div>
                        <VideogameDetail videogameDetail={videogameDetail} />

                    </div>
                </div>

                }
            </div>
        </>
    )
}

export default DetailVideogame;