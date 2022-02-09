import React from "react";
import { AgendaConsumer } from "../../../context/Agendas/AgendaState";

const TableItem = ( {agenda, index} ) => {

    const {editarContacto, borrarContacto} = AgendaConsumer()


  return (
    <>
        <tr className="my-5 d-flex">
          <th scope="row ">{index + 1}</th>
          <td>{agenda.name}</td>
          <td>{agenda.number}</td>
        <td className="btn btn-warning m-2" onClick={() => editarContacto(agenda.id)}>Editar</td> 
        <td className="btn btn-danger m-2" onClick={() => borrarContacto(agenda.id)}>Borrar</td>
        </tr>
    </>
  
    
   
  );
};

export default TableItem;
