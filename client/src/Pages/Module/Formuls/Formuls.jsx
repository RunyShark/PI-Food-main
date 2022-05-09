import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getType } from "../../../store/accions";
import "./formuls.css";

const validation = (values) => {
  let errors = {};

  let pattern = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,30}$$/;
  let regexComments = /^.{1,300}$/;

  if (!values.Nomber.trim()) {
    errors.Nomber = "El campo nombre es requerido";
  } else if (!pattern.test(values.Nomber.trim())) {
    errors.Nomber =
      "¡El nombre debe tener entre 3 y 30 caracteres y no acepta valores especiales!";
  }

  if (!values.Score || values.Score < 0 || values.Score > 100) {
    errors.Score = "Se requiere una puntuacion minima de 10 y no mayor a 100";
  }

  if (!values.lvl || values.lvl < 0 || values.lvl > 100) {
    errors.lvl = "Se requiere una puntuacion minima de 10 y no mayor a 100";
  }

  if (!values.imagen.trim()) {
    errors.imagen = "Se requiere una imagen que describa la receta";
  }

  if (!values.Descripcion.trim()) {
    errors.Descripcion = "Se requiere una descripcion";
  } else if (!regexComments.test(values.Descripcion.trim())) {
    errors.Descripcion = "¡La descripcion no puede ser mayor a 300 caracters!";
  }
  if (!values.steps.trim()) {
    errors.steps = "Se requieren los pasos para realizar la receta";
  } else if (!regexComments.test(values.steps.trim())) {
    errors.steps = "¡Los pasos no puede ser mayor a 300 caracters!";
  }

  return errors;
};

const Formulario = () => {
  //const [loadig, setLoadig] = useState({}); ---- si me da tiempo hacemos un envio de correo de la reseta al usuario
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    Nomber: "",
    Descripcion: "",
    Score: 0,
    lvl: 0,
    imagen: "",
    steps: [],
    types: [],
  });

  const dispact = useDispatch();
  const { DietType } = useSelector((state) => state);

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
                Nomber
                <input
                  className="formInput"
                  id="1"
                  type="text"
                  name="Nomber"
                  placeholder={`Escribe el nombre de la receta`}
                  value={values.Nomber}
                  onChange={handleOnchange}
                  onBlur={handleBlur}
                  errorMessage="¡La receta debe de tener entre 3 y 30 caracteres, solo se acepta texto!"
                  required
                />
                {errors.Nomber && <p>{errors.Nomber}</p>}
              </label>
              <label>
                Score
                <input
                  className="formInput"
                  id="2"
                  name="Score"
                  type="number"
                  placeholder="elgie una puntuacion"
                  value={values.Score}
                  errorMessage="¡El score  debe de ser un numero entre 1 y 99 Solo se aceptan numeros!"
                  label="Score"
                  required={true}
                  onChange={handleOnchange}
                  onBlur={handleBlur}
                />
                {errors.Score && <p>{errors.Score}</p>}
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
                  errorMessage="¡El lvl  debe de ser un numero entre 1 y 99 Solo se aceptan numeros!"
                  label="lvl"
                  required={true}
                  onChange={handleOnchange}
                  onBlur={handleBlur}
                />
                {errors.lvl && <p>{errors.lvl}</p>}
                <label>
                  imagen
                  <input
                    className="formInput"
                    id="4"
                    name="imagen"
                    type="text"
                    placeholder="Coloca una imagen"
                    value={values.imagen}
                    errorMessage="¡Debe de ser una url de una imgane valida!"
                    label="imagen"
                    required={true}
                    onChange={handleOnchange}
                    onBlur={handleBlur}
                  />
                  {errors.imagen && <p>{errors.imagen}</p>}
                  <label>
                    Pasos
                    <textarea
                      className="form-texta"
                      name="steps"
                      id="5"
                      placeholder="Coloca los pasos de la recesta"
                      value={values.steps}
                      cols="50"
                      rows="5"
                      errorMessage="¡La descripcion  debe tener entre 3 y 300 caracteres, solo se acepta texto!"
                      required={true}
                      onChange={handleOnchange}
                      onBlur={handleBlur}
                    />
                  </label>
                  {errors.steps && <p>{errors.steps}</p>}
                  <label>
                    Descripcion
                    <textarea
                      className="form-texta"
                      name="Descripcion"
                      id="6"
                      placeholder="Escribe una descripcion corespondiente"
                      value={values.Descripcion}
                      errorMessage="¡La descripcion  debe tener entre 3 y 300 caracteres, solo se acepta texto!"
                      cols="50"
                      rows="5"
                      required={true}
                      onChange={handleOnchange}
                      onBlur={handleBlur}
                    />
                    {errors.Descripcion && <p>{errors.Descripcion}</p>}
                  </label>
                  <div>
                    <select defaultValue="default">
                      <option value="default" disabled>
                        Tipe dieta
                      </option>
                      {DietType.map((e) => (
                        <option key={e.id} value={e.name}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* <label>
                    types
                    <input
                      className="formInput"
                      type="text"
                      name="types"
                      id="7"
                      value={values.types}
                      onChange={handleOnchange}
                      onBlur={handleBlur}
                    />
                  </label> */}
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
