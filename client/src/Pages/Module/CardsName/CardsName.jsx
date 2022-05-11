const CardsName = ({ name, Types, img, lvl, detalis, step }) => {
  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>Puntuacion: {lvl}</p>
        <ul>
          <p>Dietas</p>
          {Types.map((e) => (
            <li key={e.name}>{e.name}</li>
          ))}
        </ul>

        <div>{<h3 dangerouslySetInnerHTML={{ __html: detalis }}></h3>}</div>
        <div>
          <p dangerouslySetInnerHTML={{ __html: step }}></p>
        </div>
        <img src={img} alt={img} />
      </div>
    </>
  );
};

export default CardsName;
