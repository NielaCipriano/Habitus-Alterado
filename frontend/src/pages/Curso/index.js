import React, { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Curso({ history }){
    const [titulo_curso, setTitulo] = useState('');
    const [data_inicio_curso, setInicio] = useState('');
    const [data_fim_curso, setFinal] = useState('');
    const [perfil_curso, setPerfil_curso] = useState('');
    const [pontuacao, setPontuacao] = useState('');
    const [avaliados, setAvaliados] = useState('');

    

    

    async function handleSubmit(event){
        event.preventDefault();

        /**
         * Aqui foi um exemplo de como obter as informações do servidor, nes caso eu estou pegando apenas o 
         * id para cadastrar um curso. 
         */
        const perfil_id = api.get('perfil').then(resp => {
          if (resp.data.length > 0) {
            return resp.data[0].id
          }
        }).catch(console.log(`Error: ${console.error}`));
        
       /**
        * Aqui estou montando o payload que a API node irá recber, 
        */
        const cursos = { titulo_curso: titulo_curso,
                         data_inicio_curso: data_inicio_curso, 
                         data_fim_curso: data_fim_curso, 
                         perfil_id }

        /**
         * Aqui eu gero o POST montando a url e passando o payload do curso para ser salvo no banco de dados
         * e retorno o registro que foi salvo.
         */
        const curso = api.post(`perfil/${perfil_id}/cursos`, cursos).then( resp => {
          return resp.data;
        }).catch(console.log(`Error: ${console.error}`));

        history.push('/inicial');

  }



    return (
        <>
        <p>
          <strong>Cadastrar Curso</strong>
        </p>
      
      <form onSubmit = {handleSubmit}> 
        <label htmlFor="titulo_curso">Título*</label>
        <input 
          id="titulo_curso" 
          type="titulo_curso" 
          placeholder=""
          value = {titulo_curso}
          onChange={ event => setTitulo(event.target.value) }
        />

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="data_inicio_curso ">Data de Inicio*</label>
        <input 
          id="data_inicio_curso" 
          type="date" 
          placeholder=""
          value = {data_inicio_curso}
          onChange={ event => setInicio(event.target.value) }
        />

      </form>

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="data_fim_curso">Data Final*</label>
        <input 
          id="data_fim_curso" 
          type="date" 
          placeholder=""
          value = {data_fim_curso}
          onChange={ event => setFinal(event.target.value) }
        />

      </form>

      
      <form onSubmit = {handleSubmit}> 
        <label htmlFor="perfil_curso">Selecione o Perfil*</label>
        <input 
          id="perfil_curso" 
          type="perfil_curso" 
          placeholder=""
          value = {perfil_curso}
          onChange={ event => setFinal(event.target.value) }
        />

      </form>
 
  
      <form onSubmit = {handleSubmit}> 
        <label htmlFor="avaliados">Selecione os Avaliados*</label>
        <input 
          id="avaliados" 
          type="avaliados" 
          placeholder=""
          value = {avaliados}
          onChange={ event => setFinal(event.target.value) }
        />
        
      </form>  

      </form>
      <form onSubmit = {handleSubmit}> 
        <label htmlFor="pontuacao">Selecione a Pontuação*</label>
        <input 
          id="pontuacao" 
          type="pontuacao" 
          placeholder=""
          value = {pontuacao}
          onChange={ event => setFinal(event.target.value) }
        />

      <Link to="/cadastroavaliados">
         <button className="btn" type="submit">Cadastrar Avaliados</button>                       
      </Link>

      <Link to="/cadastroavaliadores">
            <button className="btn" type="submit">Cadastrar Avaliadores</button>
      </Link>
     
       <button className="btn" type="submit">Cancelar</button>
       <button className="btn" type="submit">Salvar</button>
      

      </form>
      
      </>
    )
}
    