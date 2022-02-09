import React from "react";
import { AgendaConsumer } from "../../../context/Agendas/AgendaState";
import TableItem from "../TableItem/TableItem";

const Table = () => {
  const {state} = AgendaConsumer()
  return (
    <table className="my-3  mx-auto" >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Numero</th>
        </tr>
      </thead>
      <tbody>
        {
          state.agendas.map((agenda, index) => 
           ( <TableItem key={agenda.id} index={index} agenda={agenda} />)
          )
        }
      </tbody>
    </table>
  );
};

export default Table;
