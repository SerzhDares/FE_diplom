import { HashLink } from "react-router-hash-link";

interface LogoProps {
  logoClass: string;
}

export const Logo = ({logoClass}: LogoProps) => {
  return (
    <span className={logoClass}>
      <HashLink smooth className="logo_link" to='/#header'>Лого</HashLink>
    </span>
  )
}
