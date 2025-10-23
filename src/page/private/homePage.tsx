import styled from "styled-components";
import '../../assets/css/homePage.css'
import DynamicCard from "../../component/homePage/Card";
import { useNavigate } from "react-router-dom";

type HomeType = {
  classname?: string;
};


const HomePage = ({ classname }: HomeType) => {

  const navigate = useNavigate();

  return (
    <main className="dashboard-container">
        <div className="welcome"><h1>Seja bem vindo User</h1></div>
        <div className="cards-wrapper">
            <DynamicCard title="Alunos"  color="#E9F3FF" onClick={() => navigate("/alunos")} />
            <DynamicCard title="Feedbacks"  color="#E9F3FF" onClick={() => navigate("/feedback")} />
            <DynamicCard title="Relatórios"  color="#E9F3FF" onClick={() => navigate("/relatorios")} />
        </div>
    </main>
  );
};

export default styled(HomePage)`
`;
