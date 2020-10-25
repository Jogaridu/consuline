import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Formik, Form } from "formik";

import MenuCentral from "../../../Components/MenuCentral";
import MenuCentral2 from "./infoPessoalMedico";
import TituloPrincipal from "../../../Components/TituloPrincipal";
import MenuCentral3 from "./infoLocalizacaoMedico";
import MenuCentral4 from "./infoLoginMedico";

import Lottie from "react-lottie";
import loader from "../../../Assets/loader.json";

import add from "../../../Assets/add3.png"

// import { Link } from "react-router-dom";

function Medico() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    }
  };

  return (
    <>
      <div className="container-central">
        <MenuCentral />
        <div className="container-conteudo-central">
          <TituloPrincipal nome="Cadastro médico" imagem={add} />
          <Formik>
            <Form>
              <Router>
                <Switch>
                  <Route path={'/profissional-saude/login'}>
                    <MenuCentral4 />
                  </Route>
                  <Route path={'/profissional-saude/endereco'}>
                    <MenuCentral3 />
                  </Route>
                  <Route path={'/profissional-saude'}>
                    <MenuCentral2 />
                  </Route>





                </Switch>
              </Router>
            </Form>
          </Formik>
          {/* <Lottie options={defaultOptions} height={200} width={200} style={{ margin: "100px auto" }} />
          <h2>EM DESENVOLVIMENTO</h2> */}
        </div>
      </div>
    </>
  );
};

export default Medico;
{/* <MenuCentral2/>  */ }