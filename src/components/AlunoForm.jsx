import React, { useState } from 'react';
import './AlunoForm.css'; 
import { useForm } from 'react-hook-form';

const AlunoForm = ({ addAluno }) => {
  const { register, handleSubmit, reset } = useForm();
  const [notas, setNotas] = useState(['', '', '', '', '']);
  const [frequencias, setFrequencias] = useState(['', '', '', '', '']);

  const onSubmit = (data) => {
    addAluno({ nome: data.nome, notas, frequencias });
    reset();
    setNotas(['', '', '', '', '']);
    setFrequencias(['', '', '', '', '']);
  };

  const handleNotaChange = (index, value) => {
    const newNotas = [...notas];
    newNotas[index] = value;
    setNotas(newNotas);
  };

  const handleFrequenciaChange = (index, value) => {
    const newFrequencias = [...frequencias];
    newFrequencias[index] = value;
    setFrequencias(newFrequencias);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="aluno-form">
      <h2>Adicionar Aluno</h2>
      <input
        type="text"
        placeholder="Nome do Aluno"
        {...register("nome", { required: true })}
        className="input-aluno"
      />
      <h3>Notas</h3>
      {notas.map((nota, index) => (
        <input
          key={index}
          type="number"
          placeholder={
            index === 0 ? 'Matemática' :
            index === 1 ? 'História' :
            index === 2 ? 'Geografia' :
            index === 3 ? 'Computação' :
            'Português'
          }
          value={nota}
          onChange={(e) => handleNotaChange(index, e.target.value)}
          required
          min="0"
          max="10"
          className="input-nota"
        />
      ))}
      <h3>Frequências</h3>
      {frequencias.map((frequencia, index) => (
        <input
          key={index}
          type="number"
          placeholder={
            index === 0 ? 'Frequência Matemática (%)' :
            index === 1 ? 'Frequência História (%)' :
            index === 2 ? 'Frequência Geografia (%)' :
            index === 3 ? 'Frequência Computação (%)' :
            'Frequência Português (%)'
          }
          value={frequencia}
          onChange={(e) => handleFrequenciaChange(index, e.target.value)}
          required
          min="0"
          max="100"
          className="input-frequencia"
        />
      ))}
      <button type="submit" className="btn-adicionar" >Adicionar Aluno</button>
    </form>
  );
};

export default AlunoForm;
