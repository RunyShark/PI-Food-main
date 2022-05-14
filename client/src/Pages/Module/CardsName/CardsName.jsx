const CardsName = ({ name, Types, img, lvl, detalis, step }) => {
  return (
    <>
      <div className="dad-details">
        <div className="parrafo">
          <h2>{name}</h2>
          <img src={img} alt={img} />
          <p>Nive: {lvl}</p>
          <p>Dietas</p>
          {Types.map((e) => (
            <li key={e.name}>{e.name}</li>
          ))}
          <h3 dangerouslySetInnerHTML={{ __html: detalis }}></h3>
          <p dangerouslySetInnerHTML={{ __html: step }}></p>
        </div>
      </div>
    </>
  );
};

export default CardsName;
