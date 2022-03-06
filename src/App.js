import React from 'react'
import FormularioCadastro from './components/Formulario/Formulario'
import { validarCPF, validarSenha } from './models/Cadastro'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material';
import '@fontsource/roboto/500.css'
import validacoesCadastro from "./context/validacoesCadastro"
function App() {
        return (
                <Container component="article" maxWidth="sm" >
                        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
                        <validacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha }}>
                                <FormularioCadastro onSubmit={onSubmit} />
                        </validacoesCadastro.Provider>



                </Container>
        );
}
function onSubmit(dados) {
        console.log({ dados })
}

export default App;
