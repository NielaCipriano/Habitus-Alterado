import React, { useState } from 'react';
import api from '../../services/api';
import './styles.css';


export default function Conteudo({ history }){
    const [desc_pauta, setPauta] = useState('');
    const [conteudofiltro, setconteudofiltro] = useState('');
    
  

    async function handleSubmit(event){
        event.preventDefault();

        const response = await api.post('sessions', { desc_pauta })

        const { _id } = response.data;
    
        localStorage.setItem('user', _id);

        history.push('/inicial');

  }



    return (
        <>
        <p>
          <strong>Cadastrar Conteúdo</strong>
        </p>
      
        <form onSubmit = {handleSubmit}> 
            <label htmlFor="conteudofiltro">Selecionar Conteúdo já cadastrado:</label>
            <input 
            id="conteudofiltro" 
            type="conteudofiltro" 
            placeholder="Selecione o conteúdo"
            value = {desc_pauta}
            onChange={ event => setPauta(event.target.value) }
            />

        
        </form>


        <form>
        <label>Novo Conteúdo</label>
        </form>
         
       
        <form onSubmit = {handleSubmit}> 
            <label htmlFor="desc_pauta">PAUTAS*</label>
            <input 
            id="desc_pauta" 
            type="desc_pauta" 
            placeholder="Cadastrar Pauta 01"
            value = {desc_pauta}
            onChange={ event => setPauta(event.target.value) }
            />

        
        </form>

        <form onSubmit = {handleSubmit}> 
        
            <input 
            id="desc_pauta" 
            type="desc_pauta" 
            placeholder="Cadastrar Pauta 02"
            value = {desc_pauta}
            onChange={ event => setPauta(event.target.value) }
            />

        
        

        </form>

        <form onSubmit = {handleSubmit}> 
        
        <input 
        id="desc_pauta" 
        type="desc_pauta" 
        placeholder="Cadastrar Pauta 03"
        value = {desc_pauta}
        onChange={ event => setPauta(event.target.value) }
        />

    
    

    </form>
        <form onSubmit = {handleSubmit}> 
        
        <input 
        id="desc_pauta" 
        type="desc_pauta" 
        placeholder="Cadastrar Pauta 04"
        value = {desc_pauta}
        onChange={ event => setPauta(event.target.value) }
        />
        
        <button className="btn" type="submit">Cadastrar</button>
        <button className="btn" type="submit">Cancelar</button>
        </form>




        </>

        )





}