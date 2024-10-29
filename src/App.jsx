import React, { useState, useEffect } from 'react';
import AlunoForm from './components/AlunoForm';
import AlunoList from './components/AlunoList';

const App = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const alunosSalvos = JSON.parse(localStorage.getItem('alunos'));
    if (alunosSalvos) {
      setAlunos(alunosSalvos);
    }
  }, []);

  const addAluno = (aluno) => {
    const novosAlunos = [...alunos, aluno];
    setAlunos(novosAlunos);
    localStorage.setItem('alunos', JSON.stringify(novosAlunos));
  };

  const removeAluno = (index) => {
    const novosAlunos = alunos.filter((_, i) => i !== index);
    setAlunos(novosAlunos);
    localStorage.setItem('alunos', JSON.stringify(novosAlunos));
  };

  const calcularMediaTurma = () => {
    const totalAlunos = alunos.length;
    const mediaDisciplina = Array(5).fill(0);

    alunos.forEach((aluno) => {
      aluno.notas.forEach((nota, index) => {
        mediaDisciplina[index] += Number(nota);
      });
    });

    return mediaDisciplina.map((soma) => (totalAlunos > 0 ? soma / totalAlunos : 0));
  };

  const mediaTurma = calcularMediaTurma();

  const alunosAcimaMedia = alunos.filter((aluno) => {
    return aluno.notas.reduce((acc, nota) => acc + Number(nota), 0) / aluno.notas.length > mediaTurma[0]; 
  });

  return (
    <div className="app">
      <h1>Registro de Notas e Frequências</h1>
      <AlunoForm addAluno={addAluno} />
      <AlunoList
        alunos={alunos}
        mediaTurma={mediaTurma}
        alunosAcimaMedia={alunosAcimaMedia}
        removeAluno={removeAluno} 
      />
    </div>
  );
};

export default App;
