import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView  } from 'react-native';

import api from '../../services/api';


export default function CadastrarFatoObservado( { navigation }){
  
  const [desc_fato, setDesc_fato] = useState('');
  const [conteudo_id, setConteudo_id] = useState('');
  const [pauta_id, setPauta_id] = useState('');
  const [atividade_id, setAtividade_id] = useState('');
  const [avaliador_id, setAvaliador_id] = useState('');
  const [providencia_id, setProvidencia_id] = useState('');
    
  


    async function handleSubmit(){
   
        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);

        //ir para proxima tela
       navigation.navigate('HomeAvaliador');
        
    }

    return(
      
      <ScrollView>
        
        <View style={styles.container}>
        <Text style={styles.label}>FATO OBSERVADO</Text>   

            <View style={styles.form}>
                <Text style={styles.label}>Data/Hora *</Text>
                <TextInput
                    id="data" 
                    style={styles.Input}
                    placeholder=""
                    placeholderTextColor= "#999"       
                    type="date"
                    titulo="data_fato"
                    
                    />

                <Text style={styles.label}>Indicador</Text>
                <TextInput
                    style={styles.Input}
                    placeholder="Informe o indicador"
                    placeholderTextColor= "#999"
                    autoCorrect={false}  
                   //value = {indicador}
                                      
                    />    
                    <Text style={styles.label}>Avaliador</Text>
                    <TextInput
                      style={styles.Input}
                      placeholder="Selecione o o avaliador"
                      placeholderTextColor= "#999"
                      autoCorrect={false}
                      titulo = {avaliador_id}    
                    />  
                      <Text style={styles.label}>Avaliados</Text>                     
                      <TextInput
                      style={styles.Input}
                      placeholder="Selecione os avaliados"
                      placeholderTextColor= "#999"
                      autoCorrect={false} 
                      //value = {avaliados}   
                    />  

                      <Text style={styles.label}>Atividade</Text>                     
                      <TextInput
                      style={styles.Input}
                      placeholder="Informe a atividade"
                      placeholderTextColor= "#999"
                      autoCorrect={false}  
                      titulo = {atividade_id}  
                    />  
                            <Text style={styles.label}>Fato</Text>                     
                      <TextInput
                      style={styles.Input}
                      placeholder="Informe o fato"
                      placeholderTextColor= "#999"
                      autoCorrect={false}  
                      value = {desc_fato} 

                    />  
                      <Text style={styles.label}>Providência</Text>                     
                      <TextInput
                      style={styles.Input}
                      placeholder="Informe a Providência"
                      placeholderTextColor= "#999"
                      autoCorrect={false}  
                      titulo = {providencia_id} 
                    />  
                     
                       <Text style={styles.label}>Conteúdos</Text>                     
                      <TextInput
                      style={styles.Input}
                      placeholder="Selecione os Conteúdos"
                      placeholderTextColor= "#999"
                      autoCorrect={false} 
                      titulo = {conteudo_id}
                      
                    />     
                     <Text style={styles.label}>PAUTAS</Text>

                      <Text style={styles.label}>Pauta do conteúdo 01</Text>                     
                      <TextInput
                      style={styles.Input}
                      placeholder="Informe a pauta 01"
                      placeholderTextColor= "#999"
                      autoCorrect={false}  
                      titulo = {pauta_id}  
                    />      
                      <Text style={styles.label}>Pauta do conteúdo 02</Text>                     
                      <TextInput
                      style={styles.Input}
                      placeholder="Informe a pauta 02"
                      placeholderTextColor= "#999"
                      autoCorrect={false}  
                      titulo = {pauta_id}   
                    />       
                      <Text style={styles.label}>Pauta do conteúdo 03</Text>                     
                      <TextInput
                      style={styles.Input}
                      placeholder="Informe a pauta 03"
                      placeholderTextColor= "#999"
                      autoCorrect={false} 
                      titulo = {pauta_id}     
                    />    
                    <Text style={styles.label}>Pauta do conteúdo 04</Text>                     
                      <TextInput
                      style={styles.Input}
                      placeholder="Informe a pauta 04"
                      placeholderTextColor= "#999"
                      autoCorrect={false}  
                      titulo = {pauta_id}  

                    />        

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Deletar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 50,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 3,
        marginTop: 50
    },

    input: {
       borderWidth: 1,
       borderColor: '#ddd',
       paddingHorizontal: 20,
       fontSize: 18,
       color: '#444',
       height: 44,
       marginBottom: 20,
       borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#006400',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

