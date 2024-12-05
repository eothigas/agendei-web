import { Link, useNavigate } from 'react-router-dom';
import "./login.css";
import logo from '../../assets/logo.png';
import fundo from '../../assets/fundo.png';
import { useState } from 'react';
import api from '../../constants/api.js';

function Login(){

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [msg, setMsg] = useState("");

    async function ExecuteLogin() {
        // Verifica se os campos email e senha estão preenchidos
        if (!email || !password) {
            setMsg("Por favor, preencha o email e a senha.");
            // Esconde a mensagem após 2 segundos
            setTimeout(() => setMsg(""), 3500);
            return; // Interrompe a execução da função caso os campos não sejam preenchidos
        }
    
        try {
            const response = await api.post("/users/login", { 
                email, 
                password 
            });
    
            if (response.data) {
                localStorage.setItem('sessionToken', response.data.token);
                localStorage.setItem('sessionId', response.data.id_user);
                localStorage.setItem('sessionEmail', response.data.email);
                localStorage.setItem('sessionName', response.data.name);

                // Redireciona:
                navigate("/appointments");
            } else {
                console.log("Resposta inesperada:", response);
            }
    
        } catch (error) {
            setMsg("Dados inválidos. Tente novamente!");
            
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

                <h5 className="mb-5">Gerencie seus agendamentos de forma 
                    descomplicada.
                </h5>

                <h5 className="mb-4 text-secondary">Acesse sua conta</h5>

                <div className="mb-4">
                    <input 
                        required 
                        className="form-control" 
                        type="email" 
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="mb-2">
                    <input required className="form-control"
                        type="password" placeholder="Senha" 
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="mt-3 mb-5">
                    <button onClick={ExecuteLogin} className="btn btn-primary w-100" type='button'>Login</button>
                </div>

                {
                    msg.length > 0 && //Então
                        <div className="alert alert-danger" role="alert">
                            {msg}
                        </div>
                }
                
                <div>
                    <span className="me-1">Não tenho uma conta.</span>
                    <Link to="/register">Criar agora!</Link>
                </div>
            
            </form>
        </div>

        <div className="col-sm-7 d-flex">
            <img src={fundo} className="background-login"/>
        </div>
    </div>
}

export default Login;