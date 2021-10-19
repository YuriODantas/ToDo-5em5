import { useState } from 'react';
import * as C from './App.styles'
import { ListItem } from './components/ListItem';
import { Item } from './types/item'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false },
    { id: 1, name: 'Comprar banana', done: true }
  ]);

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Adicionar nova tarefas */}

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
    );
}

export default App;