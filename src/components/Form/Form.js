import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AgendaConsumer } from "../../context/Agendas/AgendaState";
const Form = () => {
  const { addContacto, state,actualizarContacto } = AgendaConsumer();
  const [agenda, setAgenda] = useState(state.editarState || {
    id: uuidv4(),
    name: "",
    number: "",
  });

  const handleChange = (e) => {
      const {name, value} = e.target;
      setAgenda({
          ...agenda,
          [name]: value
      })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if(state.editar){
        actualizarContacto(agenda)
      } else {

        addContacto(agenda);
      }
      setAgenda({
          ...agenda,
          name:'',
          number:''
        })
     
  }
  return (
    <div className="w-75">
      <form className="w-100 mx-auto d-flex flex-column my-5 p-5 border" onSubmit={handleSubmit}>
          <h5 className="fs-4 text-uppercase mb-5 text-center">Complete los datos</h5>
        <input type="text" name="name" className="form-control my-2" value={agenda.name}  onChange={handleChange} placeholder="Name"/>
        <input type="number" name="number" value={agenda.number} className="form-control   my-2" onChange={handleChange} placeholder="Number"/>
        <button type="submit" className="btn btn-success text-uppercase my-1">
          {state.editar ? 'Actualizar' : 'Agendar'}
        </button>
        <button type="submit" className="btn btn-danger text-uppercase my-1" >
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default Form;
