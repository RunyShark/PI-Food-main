const CardsName = ({ id, name, Types, img, score, lvl, detalis, step }) => {
  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>{score}</p>
        <p>{lvl}</p>
        <ul>
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
