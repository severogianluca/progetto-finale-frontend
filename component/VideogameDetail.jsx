import { Link } from "react-router-dom";

function VideogameDetail({videogameDetail}) {

    const { name, description, fotoUrl, videoUrl,releaseDate,  price, genres } = videogameDetail;
    return (

        <>


            <div className="row mb-4">
                <div className="col-8">
                    <div className="ratio ratio-16x9">
                        <iframe frameBorder="0" allowFullScreen src={videoUrl}></iframe>
                    </div>

                    <div className="card w-100 mt-3 price-card-show mb-5">
                        <div className="card-body d-flex justify-content-between align-items-center  ">
                            <div>
                                <p className="card-text fw-bold" >Acquista {name}</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center price small gap-3">
                            <div>{price}</div>
                            <div className="kart">
                                Aggiungi al carrello
                            </div>
                        </div>
                    </div>


                </div>

                <div className=" col-4">
                    <img src={fotoUrl} alt="dragonball" className="img-fluid" />
                    <p className="mt-2 small">{description}</p>
                    <div className="small d-flex gap-3">
                        <div className="d-flex gap-2">
                            <p className="txt ">Data di rilascio: </p>
                            <p>{new Date(releaseDate).toLocaleDateString('it-IT')}</p>
                        </div>

                    </div>

                    <div className="mb-3">
                        {genres.map((element, index) => (
                            <span key={index} className="sbeam-badge me-1">
                                {element.name}
                            </span>
                        ))}

                    </div>

                    <div>
                        <Link to="/" type="button" className="btn btn-danger">Indietro</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default VideogameDetail