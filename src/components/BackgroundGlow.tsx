export function BackgroundGlow() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{
        background:
          "radial-gradient(ellipse 50vw 50vw at -10% -20%, rgba(229,57,53,0.07) 0%, transparent 70%), " +
          "radial-gradient(ellipse 60vw 60vw at 110% 120%, rgba(243,244,246,0.03) 0%, transparent 70%)",
      }}
    />
  );
}
