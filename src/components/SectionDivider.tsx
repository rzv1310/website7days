interface SectionDividerProps {
  from: string;
  to: string;
  height?: string;
}

const SectionDivider = ({ from, to, height = "h-24 md:h-32" }: SectionDividerProps) => {
  return (
    <div
      className={`w-full ${height}`}
      style={{
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );
};

export default SectionDivider;
