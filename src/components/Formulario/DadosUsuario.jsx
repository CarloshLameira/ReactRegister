import React, { useState, useContext } from 'react';
import TextField from "@mui/material/TextField"
import { Button } from '@mui/material';
import validacoesCadastro from '../../context/validacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ onSubmit}) {
        const [email, setEmail] = useState("")
        const [senha, setSenha] = useState("")
        const validacoes = useContext(validacoesCadastro)
        const [erros, validarCampos, possoEnviar] = useErros(validacoes)

        return (
                <form onSubmit={(event) => {
                        event.preventDefault();
                        if (possoEnviar()){
                        onSubmit({email, senha});
                        }
                }}>
                        <TextField value={email} onChange={(event) => { setEmail(event.target.value) }} id="email" label="email" type="email" variant="outlined" required fullWidth margin="normal" />
                        <TextField value={senha} onChange={(event) => { setSenha(event.target.value) }} onBlur={validarCampos} error={!erros.senha.valido} helperText={erros.senha.texto} name="senha" id="password" label="password" type="password" variant="outlined" required fullWidth margin="normal" />
                        <Button type="submit" variant="contained" color="primary">Próximo</Button>
                </form>
        )
}
export default DadosUsuario;