import { useState } from 'react';
import { Tube } from './components/Tube';

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
      return;
    }

    if (selectedTube === index) {
      setSelectedTube(null);
      return;
    }

    const sourceTube = [...tubes[selectedTube]];
    const targetTube = [...tubes[index]];

    if (targetTube.length >= 4) {
      alert('Cheio');
      setSelectedTube(null);
      return;
    }

    const liquid = sourceTube[sourceTube.length - 1];

    if (targetTube.length > 0 && targetTube[targetTube.length - 1] !== liquid) {
      alert('Diferente');
      setSelectedTube(null);
      return;
    }

    sourceTube.pop();
    targetTube.push(liquid);

    const newTubes = [...tubes];
    newTubes[selectedTube] = sourceTube;
    newTubes[index] = targetTube;

    setTubes(newTubes);
    setSelectedTube(null);
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