import { Link } from "react-router-dom";


function VideogameCard({ videogame }) {
    const { id, name, description, fotoUrl, price } = videogame;

    return (

        <>
            <div className="card mb-3 card-color">
                <Link to={`videogames/${id}`} className="stretched-link"></Link>
                <div className="row g-0">
                    <div className="col-12 col-md-4">
                        <div className="ratio ratio-16x9">
                            <img src={fotoUrl} alt="Foto videogame" className="w-100 h-100 " />
                        </div>
                    </div>

                    <div className="col-12 col-md-8">
                        <div className="card-body">
                            <h3 className=" fw-bold fs-5">{name}</h3>
                            <p className="card-text text-truncate mt-3">{description}</p>
                            <div className="d-flex justify-content-between align-items-center mt-5">
                                <div>
                                    <p className="card-text">{price}{"\u20AC"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideogameCard;