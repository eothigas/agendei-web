import { Link, useNavigate } from 'react-router-dom';
import "./register.css";
import logo from '../../assets/logo.png';
import fundo from '../../assets/fundo.png';
import { useState } from 'react';
import api from '../../constants/api.js';

function Register(){

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [passwordConfirm, setPasswordConfirm] = useState(""); 
    const [msg, setMsg] = useState("");

    async function ExecuteAccount() {

        setMsg("");

        if (password != passwordConfirm) {
            setMsg("As senhas não conferem. Tente novamente.")
            setTimeout(() => setMsg(""), 3500);
                return;
        }

        // Verifica se os campos email e senha estão preenchidos
        if (!email || !password) {
            setMsg("Por favor, preencha o email e a senha.");
            // Esconde a mensagem após 2 segundos
            setTimeout(() => setMsg(""), 3500);
            return; // Interrompe a execução da função caso os campos não sejam preenchidos
        }
    
        try {
            const response = await api.post("/users/register", { 
                name,
                email, 
                password 
            });
    
            if (response.data) {
                localStorage.setItem('sessionToken', response.data.token);
                localStorage.setItem('sessionId', response.data.id_user);
                localStorage.setItem('sessionEmail', email);
                localStorage.setItem('sessionName', name);

                // Redireciona:
                navigate("/appointments");
            } else {
                console.log("Resposta inesperada:", response);
            }
    
        } catch (error) {
            setMsg("Erro ao criar conta. Tente novamente!");
            
            // Esconde a mensagem após 2 segundos
            setTimeout(() => setMsg(""), 3500);
    
            if (error.response) {
                console.log("Erro na resposta do servidor:", error.response.data);
            } else if (error.request) {
                console.log("Erro na requisição (sem resposta):", error.request);
            } else {
                console.log("Erro ao configurar a requisição:", error.message);
            }
        }
    }

    return <div className="row">
        <div className="col-sm-5 d-flex justify-content-center 
            align-items-center text-center">
            
            <form className="form-signin">
                <img src={logo} className="logo mb-4"/>

                <h5 className="mb-5">Crie sua conta agora mesmo.
                </h5>

                <h5 className="mb-4 text-secondary">Preencha os campos abaixo</h5>

                <div className="mt-4">
                    <input className="form-control" 
                        type="text" placeholder="Nome" 
                        onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="mt-2">
                    <input className="form-control" 
                        type="email" placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="mt-2">
                    <input className="form-control"
                        type="password" placeholder="Senha" 
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mt-2">
                    <input className="form-control"
                        type="password" placeholder="Confrme a Senha"
                        onChange={(e) => setPasswordConfirm(e.target.value)}/>
                </div>

                <div className="mt-3 mb-5">
                    <button onClick={ExecuteAccount} className="btn btn-primary w-100" type='button'>Criar minha conta</button>
                </div>

                {
                    msg.length > 0 && //Então
                        <div className="alert alert-danger" role="alert">
                            {msg}
                        </div>
                }

                <div>
                    <span className="me-1">Já tenho uma conta.</span>
                    <Link to="/">Acessar agora!</Link>
                </div>
            
            </form>
        </div>

        <div className="col-sm-7 d-flex">
            <img src={fundo} className="background-login"/>
        </div>
    </div>
}

export default Register;