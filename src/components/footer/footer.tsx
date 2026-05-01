import { Container } from "../../components";

export const Footer = () => {
  return (
    <footer className="py-6 text-sm">
      <Container>
        <p>© {new Date().getFullYear()} Карина Булавінцева</p>
      </Container>
    </footer>
  );
};
