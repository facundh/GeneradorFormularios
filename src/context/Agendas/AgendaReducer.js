import React from 'react';
import { ACTUALIZAR_CONTACTO, ADD_CONTACTO, BORRAR_CONTACTO, EDITAR_CONTACTO, TOGGLE_SHOW } from '../types';



const AgendaReducer = (state, action) => {
 
    switch (action.type) {

       case TOGGLE_SHOW:
           return {
               ...state,
               showForm: action.payload
           }
        
        case ADD_CONTACTO:
            return {
                ...state,
                agendas: [...state.agendas, action.payload ]
            }
        case EDITAR_CONTACTO:
            return {
                ...state,
                editarState: state.agendas.find(agenda => agenda.id === action.payload),
                editar:true
            }
        case ACTUALIZAR_CONTACTO:
            return {
                ...state,
                editarState: null,
                agendas:state.agendas.map((agenda ) => {
                    if(agenda.id === action.payload.id){
                        agenda = action.payload
                    }
                    return agenda;
                }),
                editar:false,
               
            }
        case BORRAR_CONTACTO:
            return {
                ...state,
                agendas:state.agendas.filter((e) => e.id !== action.payload)
            }
    
        default: return state;
    }
};

export default AgendaReducer;
