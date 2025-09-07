function Loader(){
  return (
    <div className="overlay d-flex">
      <div className="spinner-border text-primary" role="status"></div>
      <div>
        <h1> Caricamento</h1>
      </div>
    </div>
  );
};

export default Loader;