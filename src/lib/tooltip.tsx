const Tooltip = ({
  text,
  left,
  top,
}: {
  text: string;
  top: number;
  left: number;
}) => {
  return (
    <div
      style={{
        width: "max-content",
        position: "fixed",
        transform:"translate(-50%,-100%)",
        left: left,
        top: top,
        backgroundColor: "black",
        borderRadius: 4,
        color: "white",
        padding: "4px 2px",
        fontSize: 11,
      }}
    >
      {text}
    </div>
  );
};

export default Tooltip;
