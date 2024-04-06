import { useState } from 'react'

let induiceTableau = 0;

function App (){

  const [name, setName] = useState('');
  const [todo, setTodo] = useState([]);

    return (
    <>
      <h1>Liste todo :</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setTodo([
          ...todo,
          { id: induiceTableau++, name: name }
        ]);
      }}>Ajouter</button>
      <ul>
        {todo.map(td => (
          <li key={td.id}>
		            {td.name}
                <button onClick={() => {
                  setTodo(
                    todo.filter(a =>
                      a.id !== td.id
                    )
                  );
                }}>
                Supprimer
                </button>
	        </li>
        ))}
      </ul>
    </>
  );
}

export default App