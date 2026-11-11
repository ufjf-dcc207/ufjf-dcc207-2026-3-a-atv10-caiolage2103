import { useState } from 'react';

export default function App() {
  const [tubes] = useState<string[][]>([
    ['red', 'blue', 'green', 'red'],
    ['green', 'red', 'blue', 'blue'],
    ['blue', 'green', 'red', 'green'],
    [],
    []
  ]);

  return (
    <div>
      <h1>JOGO DOS VIDRINHOS</h1>
    </div>
  );
}
