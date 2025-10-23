import styled from "styled-components";

type ProfessorSelectType = {
    classname?: string,
    label?: string | any,
    children?: React.ReactNode;
}

const ProfessorSelect =  ({classname, label, children} : ProfessorSelectType) => {
  return (
    <div className={classname}>
        <p>{label}</p>
        <select defaultValue="" title="Selecione...">
            <option value="" disabled>Selecione...</option>
            {children}
        </select>
    </div>
  );
};
export default styled(ProfessorSelect)`
width: 100%;
height: 100%;
`