import styled from "styled-components";

type ProfessorSelectType = {
    classname?: string,
    label?: string | any,
    children?: React.ReactNode;
    onChange?: any,
    id?: string,
}

const ProfessorSelect =  ({classname, label, children, onChange, id} : ProfessorSelectType) => {
  return (
    <div className={classname}>
        <p>{label}</p>
        <select defaultValue="" title="Selecione..." onChange={onChange} id={id}>
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