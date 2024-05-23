import { FC } from "react";
import { Container } from "../components";
import { AppRoutes } from "../routes";

const App: FC = () => {
  return (
    <Container>
      <AppRoutes />
    </Container>
  );
};

export default App;
