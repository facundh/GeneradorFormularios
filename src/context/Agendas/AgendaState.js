import React, { createContext, useContext, useReducer } from 'react';
import { ACTUALIZAR_CONTACTO, ADD_CONTACTO, EDITAR_CONTACTO, TOGGLE_SHOW ,BORRAR_CONTACTO} from '../types';
import AgendaReducer from './AgendaReducer';


const AgendaContext = createContext();
export const AgendaConsumer = () => useContext(AgendaContext);

const initalState = {
    editar: false,
    showForm: false,
    agendas: [],
    editarState: null,
}

const AgendaState = ({children}) => {

    const [state, dispatch] = useReducer(AgendaReducer, initalState);

    const toggleShowForm = () => {
        dispatch({
            type: TOGGLE_SHOW,
            payload: !state.showForm
        })
    }

    const addContacto = (agenda) => {
        dispatch({
            type: ADD_CONTACTO,
            payload: agenda
        })
        toggleShowForm();
    }

    const editarContacto = (id) => {
       dispatch({
           type: EDITAR_CONTACTO,
           payload: id
       })
       toggleShowForm();
    }

    const actualizarContacto = (contacto) => {
       dispatch({
           type: ACTUALIZAR_CONTACTO,
           payload: contacto
       })
       toggleShowForm();
    }

    const borrarContacto = (id) => {
        dispatch({
            type: BORRAR_CONTACTO,
            payload: id
        })
    }

  return (
  
  <AgendaContext.Provider value={{state, toggleShowForm, addContacto, editarContacto, actualizarContacto, borrarContacto}}>
        {children}
  </AgendaContext.Provider>);
};

export default AgendaState;
