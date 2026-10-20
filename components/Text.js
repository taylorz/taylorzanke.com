export default function Text({ children, className }) {
  return (
    <p className={`font-sans leading-[16px] text-[13px] ${className}`}>
      {children}
    </p>
  );
}
