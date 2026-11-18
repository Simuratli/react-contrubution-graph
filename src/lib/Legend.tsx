export const Legend = ({
  colors,
  blockSize = 11,
  blockGap = 3,
}: {
  colors: string[];
  blockSize?: number;
  blockGap?: number;
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: blockGap,
        marginTop: 8,
      }}
    >
      <span style={{ marginRight: 4 }}>Less</span>
      {colors.map((color) => (
        <div
          key={color}
          style={{
            width: blockSize,
            height: blockSize,
            borderRadius: 2,
            backgroundColor: color,
          }}
        />
      ))}
      <span style={{ marginLeft: 4 }}>More</span>
    </div>
  );
};
