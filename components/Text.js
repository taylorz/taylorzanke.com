export default function Text({ children, className }) {
  return (
    <p className={`font-sans leading-[15px] text-[14px] ${className}`}>
      {children}
    </p>
  );
}
