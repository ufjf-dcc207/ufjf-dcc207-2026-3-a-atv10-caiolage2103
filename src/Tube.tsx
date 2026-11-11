interface TubeProps {
  colors: string[];
}

export function Tube({ colors }: TubeProps) {
  return (
    <div
      style={{
        width: '50px',
        height: '200px',
        border: '3px solid black',
        borderRadius: '0px',
        backgroundColor: 'white'
      }}
    />
  );
}