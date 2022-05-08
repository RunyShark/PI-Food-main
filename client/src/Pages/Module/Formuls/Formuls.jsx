import React, { useState } from "react";

import "./formuls.css";
const Formulario = () => {
  const [values, setValues] = useState({
    Nomber: "",
    Descripcion: "",
    Score: "",
    lvl: "",
    imagen: "",
    steps: "",
    types: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleOnchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
                  name="Nombre"
                  placeholder="Nombre"
                  onChange={handleOnchange}
                  errorMessage="¡La receta debe de tener entre 3 y 30 caracteres, solo se acepta texto!"
                  pattern="^[A-Za-z0-9]{3,30}$"
                  required={true}
                />
              </label>
              <label>
                Score
                <input
                  className="formInput"
                  id="2"
                  name="Score"
                  type="number"
                  placeholder="Score"
                  errorMessage="¡El score  debe de ser un numero entre 1 y 99 Solo se aceptan numeros!"
                  label="Score"
                  pattern="^[0-9]{1,99}$"
                  required={true}
                  onChange={handleOnchange}
                />
              </label>
              <label>
                lvl
                <input
                  className="formInput"
                  id="3"
                  name="lvl"
                  type="number"
                  placeholder="lvl"
                  errorMessage="¡El lvl  debe de ser un numero entre 1 y 99 Solo se aceptan numeros!"
                  label="lvl"
                  pattern="^[0-9]{1,99}$"
                  required={true}
                  onChange={handleOnchange}
                />
                -
                <label>
                  imagen
                  <input
                    className="formInput"
                    id="4"
                    name="Imagen"
                    type="url"
                    placeholder="Imagen"
                    errorMessage="¡Debe de ser una url de una imgane valida!"
                    label="Imagen"
                    pattern="((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)"
                    required={true}
                    onChange={handleOnchange}
                  />
                  <label>
                    Pasos
                    <textarea
                      name="Pasos"
                      id="5"
                      placeholder="Pasos"
                      cols="30"
                      rows="10"
                      errorMessage="¡La descripcion  debe tener entre 3 y 300 caracteres, solo se acepta texto!"
                      patter="^[A-Za-z0-9]{3,300}$"
                      required={true}
                      onChange={handleOnchange}
                    />
                  </label>
                  <label>
                    Descripcion
                    <textarea
                      name="Descripcion"
                      id="6"
                      placeholder="Descripcion"
                      errorMessage="¡La descripcion  debe tener entre 3 y 300 caracteres, solo se acepta texto!"
                      cols="30"
                      rows="10"
                      patter="^[A-Za-z0-9]{3,300}$"
                      required={true}
                      onChange={handleOnchange}
                    />
                  </label>
                  <label>
                    types
                    <input
                      className="formInput"
                      type="text"
                      name=""
                      id=""
                      onChange={handleOnchange}
                    />
                  </label>
                </label>
              </label>
              <button>Agregar</button>
              <span></span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulario;
