import React, { useState, useContext } from 'react';
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Switch from "@mui/material/Switch"
import FormControlLabel from "@mui/material/FormControlLabel"
import validacoesCadastro from '../../context/validacoesCadastro';
import useErros from "../../hooks/useErros"




function DadosPessoais({ onSubmit}) {
        const [nome, setNome] = useState("");
        const [sobrenome, setSobrenome] = useState("")
        const [cpf, setCpf] = useState("")
        const [promo, setPromo] = useState(true)
        const [news, setNews] = useState(false)
        const validacoes = useContext(validacoesCadastro)
        const [erros, validarCampos, possoEnviar] = useErros(validacoes)



        return (
                <><form onSubmit={(event) => {
                        event.preventDefault();
                        if(possoEnviar()){
                        onSubmit({ nome, sobrenome, cpf, promo, news })}
                }}>

                        <TextField
                                value={nome}
                                onChange={(event) => {
                                        let tmpNome = event.target.value;
                                        if (tmpNome.length >= 3) {
                                                tmpNome = tmpNome.substring(0, 3);
                                        }
                                        setNome(tmpNome);
                                }} id="name" label="Nome" variant="outlined" required fullWidth margin="normal" />

                        <TextField
                                value={sobrenome}
                                onChange={(event) => {
                                        let tmpSobrenome
                                        tmpSobrenome = event.target.value;
                                        if (tmpSobrenome.length >= 3) {
                                                tmpSobrenome = tmpSobrenome.substring(0, 3)
                                        }
                                        setSobrenome(tmpSobrenome)
                                }} id="lastname" label="Sobrenome" variant="outlined" required fullWidth margin="normal" />


                        <TextField
                                value={cpf}
                                onChange={(event) => {
                                        let tmpCPF
                                        tmpCPF = event.target.value;
                                        if (tmpCPF.length >= 11) {
                                                tmpCPF = tmpCPF.substring(0, 11)
                                        }
                                        setCpf(tmpCPF)
                                }
                                }
                                onBlur={validarCampos}
                                error={!erros.cpf.valido} helperText={erros.cpf.texto} name="cpf" id="cpf" label="CPF" variant="outlined" required fullWidth margin="normal" />

                        <FormControlLabel label="Promo????es " control={<Switch
                                checked={promo}
                                onChange={(event) => {
                                        setPromo(event.target.checked)
                                }} name="promo" />} />


                        <FormControlLabel label="Novidades " control={<Switch
                                checked={news}
                                onChange={(event) => {
                                        setNews(event.target.checked)
                                }} name="news" />} />
                        <Button type="submit" variant="contained" color="primary" >Pr??ximo</Button>


                </form>

                </>
        )
}

export default DadosPessoais;