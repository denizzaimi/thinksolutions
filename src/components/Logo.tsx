type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className={compact ? "logo logo--compact" : "logo"}>
      <span className="logo__image" aria-hidden="true">
        <img src="/logo-icon.png" alt="" />
      </span>
      <span className="logo__text">Think Solutions</span>
    </span>
  );
}