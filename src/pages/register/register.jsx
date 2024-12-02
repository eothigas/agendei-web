import { Link } from 'react-router-dom';
import "./register.css";
import logo from '../../assets/logo.png';
import fundo from '../../assets/fundo.png';

function Register(){
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
                        type="text" placeholder="Nome" />
                </div>

                <div className="mt-2">
                    <input className="form-control" 
                        type="email" placeholder="Email" />
                </div>

                <div className="mt-2">
                    <input className="form-control"
                        type="password" placeholder="Senha" />
                </div>
                <div className="mt-2">
                    <input className="form-control"
                        type="password" placeholder="Confrme a Senha" />
                </div>

                <div className="mt-3 mb-5">
                    <button className="btn btn-primary w-100">Criar minha conta</button>
                </div>

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