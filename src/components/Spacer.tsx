interface SpacerProps {
  height?: number;
  width?: number;
}

export function Spacer({ height, width }: SpacerProps) {
  return (
    <div
      className="block"
      style={{
        height: height ? `${height}px` : "100%",
        width: width ? `${width}px` : "100%",
      }}
    />
  );
}
