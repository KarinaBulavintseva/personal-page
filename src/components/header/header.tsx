import { Link } from "react-router";
import { themeOptions } from "../../contexts/ThemeContext";
import { useTheme } from "../../hooks";
import { Container, Toggle } from "../../components";
import logoLight from "../../assets/logo/logoLight.svg";
import logoDark from "../../assets/logo/logoDark.svg";

export const Header = () => {
  const { theme, changeTheme } = useTheme();

  const handleThemeChange = () => {
    const nextTheme =
      theme === themeOptions.light ? themeOptions.dark : themeOptions.light;
    changeTheme(nextTheme);
  };
  return (
    <header className="sticky top-0 backdrop-blur-lg z-50">
      <Container>
        <div className="flex min-h-12 items-center justify-between md:min-h-14 py-1 md:py-2">
          <div>
            <Link to="/">
              <img
                className="header-logo max-h-12 md:max-h-14"
                src={theme === "dark" ? logoDark : logoLight}
                alt="logo"
              />
            </Link>
          </div>
          <div>
            <Toggle
              isChecked={theme === themeOptions.dark}
              handleChange={handleThemeChange}
            ></Toggle>
          </div>
        </div>
      </Container>
    </header>
  );
};
