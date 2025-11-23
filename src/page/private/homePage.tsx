
import styled from "styled-components";
import "../../assets/css/homePage.css";
import DynamicCard from "../../component/homePage/Card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

type HomeType = {
  classname?: string;
};

const HomePageRoot = ({ classname }: HomeType) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <main className={classname ?? "dashboard-container"}>
      <div className="welcome">
        <h1>Seja bem vindo {user?.name}</h1>
      </div>
      <div className="cards-wrapper">
        {user?.type === "COORDINATOR" && (
          <>
            <DynamicCard title="Usuarios" color="#E9F3FF" onClick={() => navigate("/novousuario")} />
            <DynamicCard title="Alunos" color="#E9F3FF" onClick={() => navigate("/alunos")} />
          </>
        )}
        {(user?.type === "TEACHER" || user?.type === "COORDINATOR") && (
          <>
            <DynamicCard title="Relatórios" color="#E9F3FF" onClick={() => navigate("/relatorios")} />
          </>
        )}
        {user?.type === "STUDENT" && (
          <>
            <DynamicCard title="Feedbacks" color="#E9F3FF" onClick={() => navigate("/feedback")} />
          </>
        )}
      </div>
    </main>
  );
};

export default styled(HomePageRoot)`
  /* se quiser adicionar estilos locais ao componente, coloque aqui */
`;