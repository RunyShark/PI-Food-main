import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFav } from "../../../store/accions";
import { useParams } from "react-router-dom";
import "./updateFavorite.css";

const validation = (values) => {
  let errors = {};

  let pattern = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,30}$$/;
  let regexComments = /^.{1,300}$/;

  if (!values.name.trim()) {
    errors.name = "El campo nombre es requerido";
  } else if (!pattern.test(values.name.trim())) {
    errors.name =
      "¡El nombre debe tener entre 3 y 30 caracteres y no acepta valores especiales!";
  }

  if (!values.lvl || values.lvl < 0 || values.lvl > 100) {
    errors.lvl = "Se requiere una puntuacion minima de 10 y no mayor a 100";
  }

  if (!values.img.trim()) {
    errors.img = "Se requiere una img que describa la receta";
  }

  if (!values.detalis.trim()) {
    errors.detalis = "Se requiere una detalis";
  } else if (!regexComments.test(values.detalis.trim())) {
    errors.detalis = "¡La detalis no puede ser mayor a 300 caracters!";
  }

  return errors;
};

const UpdateFavorites = () => {
  const { id } = useParams();

  const dispacht = useDispatch();
  const [errors, setErrors] = useState({});
  const [update, setUpdate] = useState({
    name: "",
    detalis: "",
    lvl: 0,
    img: "",
  });

  const handleBlur = (e) => {
    handleOnchange(e);
    setErrors(validation(update));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispacht(updateFav(id, { ...update }));
    setUpdate("");
  };

  const handleOnchange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="updatte-dad">
        <div className="updatte-conteiner">
          <form onSubmit={handleSubmit}>
            <h1>Actualizacion</h1>
            <label htmlFor="Nombre">
              Nombre
              <input
                id="1"
                type="text"
                name="name"
                placeholder={`Escribe el nombre que desea modificar`}
                value={update.name}
                onChange={handleOnchange}
                onBlur={handleBlur}
                required
              />
              {errors.name && <p>{errors.name}</p>}
            </label>
            <label htmlFor="Details">
              Detalles
              <input
                id="2"
                type="text"
                name="detalis"
                placeholder={`Escribe los detalles nuevos`}
                value={update.detalis}
                onChange={handleOnchange}
                onBlur={handleBlur}
                required
              />
              {errors.detalis && <p>{errors.detalis}</p>}
            </label>
            <label htmlFor="lvl">
              Nivel
              <input
                id="3"
                type="number"
                name="lvl"
                value={update.lvl}
                onChange={handleOnchange}
                onBlur={handleBlur}
                required
              />
              {errors.lvl && <p>{errors.lvl}</p>}
            </label>
            <label htmlFor="img">
              Imagen
              <input
                id="4"
                type="text"
                name="img"
                placeholder="Coloca una nueva imagen"
                value={update.img}
                onChange={handleOnchange}
                onBlur={handleBlur}
                required
              />
              {errors.img && <p>{errors.img}</p>}
            </label>
            <button
              type="submit"
              value="Send"
              onClick={() =>
                window.location.reload(alert("Actualizacion enviada"))
              }
            >
              Enviar update
            </button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default UpdateFavorites;
