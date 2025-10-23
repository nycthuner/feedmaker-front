import styled from "styled-components";
import '../../assets/css/components/cardComponent.css'

type DynamicCardType = {
  classname?: string;
  title?: string;
  value?: string | number;
  color?: string;
  onClick?: () => void;
};

const DynamicCard = ({ classname, title, value, color, onClick }: DynamicCardType) => {
  return (
    <div
      className={`dynamic-card ${classname || ""}`}
      onClick={onClick}
      style={{ background: color || "#f8f9fb" }}
    >
      <h3>{title}</h3>
      <span>{value}</span>
    </div>
  );
};

export default styled(DynamicCard)`

`;
