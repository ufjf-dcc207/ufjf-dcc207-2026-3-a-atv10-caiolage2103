import { useState } from 'react';
import { Tube } from './Tube';

export default function App() {
  const [tubes, setTubes] = useState<string[][]>([
    ['red', 'blue', 'green', 'red'],
    ['green', 'red', 'blue', 'blue'],
    ['blue', 'green', 'red', 'green'],
    [],
    []
  ]);

  const [selectedTube, setSelectedTube] = useState<number | null>(null);

  const handleTubeClick = (index: number) => {
    if (selectedTube === null) {
      if (tubes[index].length > 0) {
        setSelectedTube(index);
      }
    } else {
      setSelectedTube(null);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', textAlign: 'center', backgroundColor: '#ccc', minHeight: '100vh' }}>
      <h1>JOGO DOS VIDRINHOS</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '40px' }}>
        {tubes.map((colors, index) => (
          <Tube
            key={index}
            colors={colors}
            isSelected={selectedTube === index}
            onClick={() => handleTubeClick(index)}
          />
        ))}
      </div>
    </div>
  );
}