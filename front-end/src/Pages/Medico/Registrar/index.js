import React from "react";
import {Switch, Route, BrowserRouter as Router } from "react-router-dom" ;
import { Formik, Form } from "formik";

import MenuCentral from "../../../Components/MenuCentral";
import MenuCentral2 from "./infoPessoalMedico";
import TituloPrincipal from "../../../Components/TituloPrincipal";
import MenuCentral3 from "./infoLocalizacaoMedico";
import MenuCentral4 from "./infoLoginMedico";
 

// import { Link } from "react-router-dom";

function Medico  () {
  return (
    <>
        <body>
            <div className="container-central">
                 <MenuCentral/> 
              <div className="container-conteudo-central">
                <TituloPrincipal nome="Cadastro médico" />
                

                <Formik>
                  <Form>
                    <Router>
                      <Switch>
                        
                        <Route path={'/cadastro-pessoal'}>
                          <MenuCentral2/>
                        </Route>

                        <Route path={'/cadastro-localizacao'}>
                           <MenuCentral3/> 
                        </Route>

                        <Route path={'/cadastro-login'}>
                           <MenuCentral4/> 
                        </Route>

                      </Switch>
                    </Router>
                  </Form>
                </Formik>
              </div>
            </div>
        </body>
    </>
  );
};

export default Medico;
{/* <MenuCentral2/>  */}