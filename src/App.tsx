import { useState } from 'react';
import { Tube } from './components/Tube';

export default function App() {
  const [tubes] = useState<string[][]>([
    ['red', 'blue', 'green', 'red'],
    ['green', 'red', 'blue', 'blue'],
    ['blue', 'green', 'red', 'green'],
    [],
    []
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', textAlign: 'center', backgroundColor: '#ccc', minHeight: '100vh' }}>
      <h1>JOGO DOS VIDRINHOS</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px' }}>
        {tubes.map((colors, index) => (
          <Tube key={index} colors={colors} />
        ))}
      </div>
    </div>
  );
}