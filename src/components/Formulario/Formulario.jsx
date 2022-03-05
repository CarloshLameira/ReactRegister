import React, { useEffect, useState } from 'react';
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntrega'
import { Typography, Step, Stepper, StepLabel } from '@mui/material';



function FormularioCadastro({ onSubmit, validacoes }) {
        const [etapaAtual, setEtapaAtual] = useState(0);
        const [dadosColetados, setDados] = useState({});
        useEffect(() => {
                if (etapaAtual === formularios.length - 1)
                        onSubmit(dadosColetados);
        }
        )
        const formularios = [
                <DadosUsuario onSubmit={coletarDados} validacoes={validacoes} />,
                <DadosPessoais onSubmit={coletarDados} validacoes={validacoes} />,
                <DadosEntrega onSubmit={coletarDados} validacoes={validacoes} />,
                <Typography variant="h5">Cadastrado com sucesso</Typography>
        ]
        function coletarDados(dados) {
                setDados({ ...dadosColetados, ...dados });
                proximo()
        }
        function proximo() {
                setEtapaAtual(etapaAtual + 1);
        }

        return (
                <>
                        <Stepper>
                                <Step><StepLabel>Login</StepLabel></Step>
                                <Step><StepLabel>Pessoal</StepLabel></Step>
                                <Step><StepLabel>Endereço</StepLabel></Step>
                                <Step><StepLabel>Finalização</StepLabel></Step>
                        </Stepper>
                        {formularios[etapaAtual]}

                </>
        )
}


export default FormularioCadastro;