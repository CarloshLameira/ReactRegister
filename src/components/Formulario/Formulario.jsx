import React from 'react';
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntrega'


function FormularioCadastro({onSubmitForm, validarCPF}){
        return (
                <>
                <DadosPessoais onSubmit ={onSubmitForm} validarCPF={validarCPF}/>
                <DadosUsuario/>
                <DadosEntrega/>
                </>
        )
}
export default FormularioCadastro;