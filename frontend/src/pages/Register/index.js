import React, {useState} from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './style.css'

import logoImg from '../../assets/logo.svg'

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    

    async function handleSubmit(event){
        event.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try{
            const response = await api.post('/ongs', data);
        
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/')
        } catch(err){
            alert('Erro no cadastro');
        }
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={(t)=>setName(t.target.value)}
                    />

                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={(t)=>setEmail(t.target.value)}
                    />

                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={(t)=>setWhatsapp(t.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={(t)=>setCity(t.target.value)}
                        />

                        <input 
                            placeholder="UF"
                            value={uf}
                            onChange={(t)=>setUf(t.target.value)}
                            style={{width:80}}
                        />
                    </div>

                    <button className="button" type="submit">Cadastar</button>                    
                </form>
            </div>
        </div>
    );
}