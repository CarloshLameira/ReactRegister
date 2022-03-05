import React, { useState } from 'react'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

function DadosEntrega({ onSubmit }) {
        const [cep, setCep] = useState("")
        const [endereco, setEndereco] = useState("")
        const [numero, setNumero] = useState("")
        const [estado, setEstado] = useState("")
        const [cidade, setCidade] = useState("")

        return (
                <>
                        <form
                                onSubmit={(event) => {
                                        event.preventDefault();
                                        onSubmit({cep, endereco, numero, estado, cidade});
                                }}>
                                <TextField value={cep} onChange={(event) => { setCep(event.target.value) }} id="CEP" label="CEP" type="number" variant="outlined" required margin="normal" />
                                <TextField value={endereco} onChange={(event) => { setEndereco(event.target.value) }} id="Endereço" label="Endereço" type="text" variant="outlined" required fullWidth margin="normal" />
                                <TextField value={numero} onChange={(event) => { setNumero(event.target.value) }} id="Numero" label="Numero" type="number" variant="outlined" required margin="normal" />
                                <TextField value={estado} onChange={(event) => { setEstado(event.target.value) }} id="Estado" label="Estado" type="text" variant="outlined" required margin="normal" />
                                <TextField value={cidade} onChange={(event) => { setCidade(event.target.value) }} id="Cidade" label="Cidade" type="text" variant="outlined" required margin="normal" />
                                <Button type="submit" variant="contained" fullWidth color="primary" >Finalizar Cadastro</Button>
                        </form>
                </>
        )
}
export default DadosEntrega