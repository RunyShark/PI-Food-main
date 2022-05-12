import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getType, postRecipe } from "../../../store/accions";
import "./formuls.css";

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
  if (!values.step.trim()) {
    errors.step = "Se requieren los pasos para realizar la receta";
  } else if (!regexComments.test(values.step.trim())) {
    errors.step = "¡Los pasos no puede ser mayor a 300 caracters!";
  }

  return errors;
};

const Formulario = () => {
  const [errors, setErrors] = useState({});
  const [diets, setDiets] = useState([]);
  const [values, setValues] = useState({
    name: "",
    detalis: "",
    lvl: 0,
    step: "",
    img: "",
  });

  const dispact = useDispatch();
  const { typess } = useSelector((state) => state);

  useEffect(() => {
    dispact(getType());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    handleOnchange(e);
    setErrors(validation(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispact(postRecipe({ ...values, Types: diets }));

    setDiets(" ");
    setValues(" ");
  };

  const handleTypeDiets = (e) => {
    setDiets([...diets, e.target.value]); // solucionar bug de formulario
  };

  return (
    <>
      <div className="form-dad">
        <div className="form-conteiner">
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <h1>Creata tu nueva receta aca</h1>
              </div>
              <label>
                name
                <input
                  className="formInput"
                  id="1"
                  type="text"
                  name="name"
                  placeholder={`Escribe el nombre de la receta`}
                  value={values.name}
                  onChange={handleOnchange}
                  onBlur={handleBlur}
                  required
                />
                {errors.name && <p>{errors.name}</p>}
              </label>
              <label>
                lvl
                <input
                  className="formInput"
                  id="3"
                  name="lvl"
                  type="number"
                  placeholder="elije un nivel"
                  value={values.lvl}
                  label="lvl"
                  required={true}
                  onChange={handleOnchange}
                  onBlur={handleBlur}
                />
                {errors.lvl && <p>{errors.lvl}</p>}
                <label>
                  img
                  <input
                    className="formInput"
                    id="4"
                    name="img"
                    type="text"
                    placeholder="Coloca una imagen"
                    value={values.img}
                    label="img"
                    required={true}
                    onChange={handleOnchange}
                    onBlur={handleBlur}
                  />
                  {errors.img && <p>{errors.img}</p>}
                  <label>
                    Pasos
                    <textarea
                      className="form-texta"
                      name="step"
                      id="5"
                      placeholder="Coloca los pasos de la recesta"
                      value={values.step}
                      cols="50"
                      rows="5"
                      required={true}
                      onChange={handleOnchange}
                      onBlur={handleBlur}
                    />
                  </label>
                  {errors.step && <p>{errors.step}</p>}
                  <label>
                    detalis
                    <textarea
                      className="form-texta"
                      name="detalis"
                      id="6"
                      placeholder="Escribe una detalis corespondiente"
                      value={values.detalis}
                      cols="50"
                      rows="5"
                      required={true}
                      onChange={handleOnchange}
                      onBlur={handleBlur}
                    />
                    {errors.detalis && <p>{errors.detalis}</p>}
                  </label>
                  <div className="yono">
                    <select
                      defaultValue="default"
                      onChange={(e) => handleTypeDiets(e)}
                    >
                      <option value="default" disabled>
                        Tipe dieta
                      </option>
                      {typess &&
                        typess.map((e) => (
                          <option key={e.id} value={e.id}>
                            {e.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </label>
              </label>

              <button
                type="submit"
                value="Send"
                onClick={() =>
                  window.location.reload(alert("solicitud enviado"))
                }
              >
                Agregar
              </button>
              <Link to={"/home"}>
                <button>volver</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulario;
