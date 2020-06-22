import React, { useState, useMemo } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import camera from '../../assets/camera.svg';
import './styles.css';

export default function New({ history }){
    const [thumbnail, setThumbnail] = useState(null);
    const [name_usuario, setName] = useState('');
    const [email_usuario, setEmail] = useState('');
    const [senha_usuario, setSenha] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])


   async function handleSubmit(event) {
       event.preventDefault();

       const data = new FormData();
       const user_id = localStorage.getItem('user');

       data.append('thumbnail', thumbnail);
       data.append('name_usuario', name_usuario);
       data.append('email_usuario', email_usuario);
       data.append('senha_usuario', senha_usuario);


       await api.post('/spots', data, {
           headers: { user_id }
       })

       history.push('/inicial');
    }

    return (
        <form onSubmit={handleSubmit}>
           

            
            <label htmlFor="name_usuario">NOME *</label>
            <input 
                id= "name_usuario"
                placeholder=""
                value={name_usuario}
                onChange={event => setName(event.target.value)}
                titulo="name_usuario"
            />
        
            <label htmlFor="email_usuario">E-MAIL * </label>
            <input 
                id= "email_usuario"
                type="email"
                placeholder=""
                value={email_usuario}
                onChange={event => setEmail(event.target.value)}
                titulo="email_usuario"
            />


            <button type="submit"className="btn">Cadastrar</button>
            <Link to="/Curso">
                <button type="submit"className="btn">Voltar</button>
            </Link>
           


        </form>
    )
}