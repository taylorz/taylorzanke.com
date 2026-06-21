export default function Text({ children, className }) {
  return (
    <p className={`font-sans leading-[16px] text-[14px] ${className}`}>
      {children}
    </p>
  );
}
