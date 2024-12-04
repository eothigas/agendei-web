import Navbar from "../../components/navbar/navbar.jsx";
import { doctors, doctors_services } from "../../constants/data.js";
import { Link, useParams } from "react-router-dom";
import "./appointment-add.css";

function AppointmentAdd() {

    const {id_appointment} = useParams();

    

    return <>

        <Navbar />

        <div className="container-fluid mt-page agendamento">
            <div className="row col-lg-4 offset-lg-4">
                <div className="col-12 mt-2">
                    <h2 className="text-center">
                        {
                            id_appointment > 0 ? "Editar Agendamento" : "Novo Agendamento"
                        } 
                    </h2>
                </div>

                <div className="col-12 mt-4">
                    <label htmlFor="doctor" className="form-label">Médico</label>
                    <div className="form-control">
                        <select name="doctor" id="doctor">
                            <option value="">Todos os médicos</option>

                            {
                                doctors.map((doc) => {
                                    return <option key={doc.id_doctor} 
                                        value="{doc.id_doctor}">
                                        {doc.name}
                                    </option>
                                })
                            }

                        </select>
                    </div>
                </div>
                
                <div className="col-12 mt-3">
                    <label htmlFor="service" className="form-label">Serviços</label>
                    <div className="form-control">
                        <select name="service" id="service">
                            <option value="">Selecione o serviço:</option>

                            {
                                doctors_services.map((doc) => {
                                    return <option key={doc.id_service} 
                                        value="{doc.id_service}">
                                        {doc.description}
                                    </option>
                                })
                            }

                        </select>
                    </div>
                </div>
                
                <div className="col-6 mt-3">
                    <label htmlFor="bookingDate" className="form-label">Data Agendamento</label>
                    <input type="date" name="bookingDate" id="bookingDate" className="form-control" />
                </div>
                
                <div className="col-6 mt-3">
                    <label htmlFor="bookingHour" className="form-label">Hora Agendamento</label>
                    <div className="form-control mb-2">
                        <select name="bookingHour" id="bookingHour">
                            <option value=" ">Selecione um Horário</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                        </select>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <div className="d-flex justify-content-end">
                        <Link to="/appointments" className="btn btn-outline-danger me-3">Cancelar</Link>
                        <button className="btn btn-primary">Salvar Dados</button>
                    </div>
                </div>
            </div>
        </div>
    </>


}

export default AppointmentAdd;