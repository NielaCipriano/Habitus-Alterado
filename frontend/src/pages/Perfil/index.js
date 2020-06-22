import React, { useState } from 'react';
import api from '../../services/api';

export default function Perfil({ history }){
    const [titulo_perfil, setTitulo] = useState('');
    const [conteudos, setConteudos] = useState('');
 
    async function handleSubmit(event){
        event.preventDefault();

        api.get('perfil', { titulo_perfil: titulo_perfil }).catch(console.log(`Error: ${console.error}`));

        history.push('/inicial');

  }



    return (
        <>
        <p>
          <strong>Cadastrar Perfil Profissiográfico</strong>
        </p>
      
        <form onSubmit = {handleSubmit}> 
            <label htmlFor="titulo_perfil">TÍTULO*</label>
            <input 
            id="titulo_perfil" 
            type="titulo_perfil" 
            placeholder=""
            value = {titulo_perfil}
            onChange={ event => setTitulo(event.target.value) }
            />


            <label htmlFor="conteudos">Selecione os Conteúdos:</label>
            <input 
            id="conteudos" 
            type="conteudos" 
            placeholder=""
            value = {conteudos}
            onChange={ event => setTitulo(event.target.value) }
            />

          <button className="btn" type="submit">Salvar</button>    
          <button className="btn" type="submit">Cancelar</button>   

        
        </form>

       
       
        </>

        )





}