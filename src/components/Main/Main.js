import React from 'react';
import { AgendaConsumer } from '../../context/Agendas/AgendaState';
import Form from '../Form/Form';
import Table from '../Table/Table/Table';


const style = {
    minHeigth: '100vh'
}

const Main = () => {

  const {toggleShowForm, state} = AgendaConsumer()
  return <div style={style} className='container-fluid d-flex align-items-center flex-column justify-content-center '>

    <div className='container'>

{

   state.showForm &&  <Form />
}
      <Table />

    <button className='btn btn-primary  w-75 mx-auto' onClick={toggleShowForm}>{!state.showForm ? 'Crear Contacto' : 'Cerrar'}</button>
   
    </div>

  </div>;
};

export default Main;
