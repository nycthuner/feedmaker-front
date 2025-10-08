import styled from "styled-components";

type DynamicInputType = {
    classname?: string,
    onChange?: any,
    placeholder?:string,
    type?: 'text' | 'file' | 'image' | 'checkbox' | 'button' | 'date' | 'number' | 'password',
    id ?: string
}

const dynamicInput = ({classname, onChange, placeholder, type, id}:DynamicInputType) =>{
    return(
        <input className={classname} onChange={onChange} placeholder={placeholder} type={type} id={id}/>
    )
}

export default styled(dynamicInput)`
width: 100%;
height: 100%;
`