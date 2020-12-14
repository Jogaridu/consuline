// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import CardListagem from '../../../Components/CardListagem';
// import MenuCentral from '../../../Components/MenuCentral';
// import TituloPrincipals from '../../../Components/TituloPrincipal';
// import api from '../../../Services/api';
// import MsgErroGenerico from "../../../Fixtures/MsgErroGenerico"

// import './styles.css';

// function ListarMedicos() {

//     const [medicos, setMedicos] = useState([]);

//     useEffect(() => {
//         carregarMedicos();

//     }, []);

//     const carregarMedicos = async () => {
//         try {
//             const retorno = await api.get("/profissionais-saude");

//             setMedicos(retorno.data);


//         } catch (error) {
//             console.log(error);

//             MsgErroGenerico();
//         }

//     }


//     return (
//         <div className="container-central">
//             <MenuCentral />
//             <div className="listar-medicos">
//                 <TituloPrincipal nome="Listar todos os profissionais cadastrados" />
//                 <div className="container-cards">
//                     {profissionalDaSaude.map(profissionalDaSaude => (<CardListagem
//                         id={profissionalDaSaude.id}
//                         foto={profissionalDaSaude.foto}
//                         nome={profissionalDaSaude.nome}
//                         funcao={profissionalServico.id}
        
//                     />)
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ListarMedicos;

