import styled from "styled-components"


type cardLoginType = {
    className?: string,
    children?: any
}

const CardLogin = ({className, children}:cardLoginType) =>{
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default styled(CardLogin)``