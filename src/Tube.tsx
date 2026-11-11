interface TubeProps {
  colors: string[];
  isSelected: boolean;
  onClick: () => void;
}

export function Tube({ colors, isSelected, onClick }: TubeProps) {
  return (
    <div
      onClick={onClick}
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
        cursor: 'pointer',
        backgroundColor: 'white',
        outline: isSelected ? '3px dashed black' : 'none'
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