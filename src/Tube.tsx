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
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        padding: '2px',
        gap: '2px',
        backgroundColor: 'white'
      }}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            width: '100%',
            height: '40px',
            backgroundColor: color,
            borderRadius: '0px',
            border: '1px solid black'
          }}
        />
      ))}
    </div>
  );
}