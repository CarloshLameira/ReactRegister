import React from 'react'
import FormularioCadastro from './components/Formulario/Formulario'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material';
import '@fontsource/roboto/500.css'
function App() {
  return (
          <Container component="article" maxWidth = "sm" >
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro onSubmit ={onSubmitForm} validarCPF={validarCPF}/>
        </Container>
  );
}
function onSubmitForm(dados){
        console.log(dados)
}
function validarCPF(cpf){
        if (cpf.length!==11){
                return {valido:false, texto:"O cpf deve possuir 11 digitos"}
        }else{
                return{valido:true, texto:""}
        }
}
export default App;
