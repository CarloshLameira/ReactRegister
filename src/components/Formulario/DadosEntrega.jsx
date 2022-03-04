import React from 'react'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

function DadosEntrega() {
        return (
                <>
                        <TextField id="CEP" label="CEP" type="number" variant="outlined" margin="normal" />
                        <TextField id="Endereço" label="Endereço" type="text" variant="outlined" fullWidth margin="normal" />
                        <TextField id="Numero" label="Numero" type="number" variant="outlined" margin="normal" />
                        <TextField id="Estado" label="Estado" type="text" variant="outlined" margin="normal" />
                        <TextField id="Cidade" label="Cidade" type="text" variant="outlined" margin="normal" />
                        <Button type="submit" variant="contained" fullWidth color="primary" >Finalizar Cadastro</Button>
                </>
        )
}
export default DadosEntrega