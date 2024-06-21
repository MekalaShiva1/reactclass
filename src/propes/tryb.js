export const Btnss = (prop) => {
  const { text, bgColor, height, width, onPress } = prop;
  return (
    <button
      style={{
        text: text,
        backgroundColor: bgColor,
        height: height,
        width: width,
        onClick: onPress,
      }}
    >
      {text}
    </button>
  );
};
