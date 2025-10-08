import styled from "styled-components";

type DynamicButtonType = {
    classname?: string,
    onClick?: any,
    type?: 'button' | 'submit' | 'reset',
    label?: string | any,
}

const DynamicButton = ({classname, onClick, type, label} : DynamicButtonType) =>{
    return(
        <button className={classname} onClick={onClick} type={type}>{label}</button>
    )
}

export default styled(DynamicButton)`
width: 100%;
height: 100%;
`