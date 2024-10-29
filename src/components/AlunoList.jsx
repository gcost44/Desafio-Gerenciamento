import React from 'react';
import './AlunoList.css';

const AlunoList = ({ alunos, mediaTurma, alunosAcimaMedia, removeAluno }) => {
  const nomesDisciplinas = ['Português', 'Matemática', 'História', 'Geografia', 'Computação'];

  const alunosAbaixoFrequencia = alunos.map(aluno => {
    const disciplinasAbaixo75 = aluno.frequencias
      .map((frequencia, index) => ({
        disciplina: nomesDisciplinas[index],
        frequencia: Number(frequencia)
      }))
      .filter(({ frequencia }) => frequencia < 75);
      
    return {
      nome: aluno.nome,
      disciplinasAbaixo75,
    };
  }).filter(aluno => aluno.disciplinasAbaixo75.length > 0);

  return (
    <div className="aluno-list">
      <h2>Lista de Alunos</h2>
      {alunos.map((aluno, index) => {
        const mediaNotas = (aluno.notas.reduce((acc, nota) => acc + Number(nota), 0) / aluno.notas.length).toFixed(2);
        const mediaFrequencias = (aluno.frequencias.reduce((acc, frequencia) => acc + Number(frequencia), 0) / aluno.frequencias.length).toFixed(2);
        //Aqui onde ocorre a media de frequencia para ela ser jogaga na lista de alunos.

        return (
          <div key={index} className="aluno">
            <button onClick={() => removeAluno(index)} className="btn-remove">X</button>
            <h3>{aluno.nome}</h3>
            <p>Média das Notas: {mediaNotas}</p>
            <p>Média da Frequência: {mediaFrequencias}%</p>
          </div>
        );
      })}
      
      <h2>Média da Turma por Disciplina</h2>
      <ul>
        {mediaTurma.map((media, index) => (
          <li key={index}>{nomesDisciplinas[index]}: {media.toFixed(2)}</li>
        ))}
      </ul>
      
      <h2>Alunos com Média Acima da Média da Turma</h2>
      <ul>
        {alunosAcimaMedia.map((aluno, index) => (
          <li key={index}>{aluno.nome} - Média: {(aluno.notas.reduce((acc, nota) => acc + Number(nota), 0) / aluno.notas.length).toFixed(2)}</li>
        ))}
      </ul>
      
      <h2>Alunos com Frequência Abaixo de 75%</h2>
      <ul>
        {alunosAbaixoFrequencia.map((aluno, index) => (
          <li key={index}>
            {aluno.nome} - 
            {aluno.disciplinasAbaixo75.map(({ disciplina, frequencia }, idx) => (
              <span key={idx}>
                {`${disciplina}: ${frequencia}%`}{idx < aluno.disciplinasAbaixo75.length - 1 ? ', ' : ''} 
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlunoList;
