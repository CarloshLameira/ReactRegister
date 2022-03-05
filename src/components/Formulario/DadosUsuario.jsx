import React, { useState } from 'react';
import TextField from "@mui/material/TextField"
import { Button } from '@mui/material';

function DadosUsuario({ onSubmit }) {
        const [email, setEmail] = useState("")
        const [senha, setSenha] = useState("")
        return (
                <form onSubmit={(event) => {
                        event.preventDefault();
                        onSubmit({email, senha});
                }}>
                        <TextField value={email} onChange={(event) => { setEmail(event.target.value) }} id="email" label="email" type="email" variant="outlined" required fullWidth margin="normal" />
                        <TextField value={senha} onChange={(event) => { setSenha(event.target.value) }} id="password" label="password" type="password" variant="outlined" required fullWidth margin="normal" />
                        <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
                </form>
        )
}
export default DadosUsuario;