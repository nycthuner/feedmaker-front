import styled from "styled-components";
type FeedbackTextareaType = {
    classname?: string,
    label?: string | any,
    Children?: any
}

const FeedbackTextarea = ({classname} : FeedbackTextareaType) => {
    return (
        <div className={classname}>
        <textarea
            placeholder="Descreva sua opinião sobre o professor..."
            rows={5}
        />
        </div>
    );
};
export default styled(FeedbackTextarea)`
width: 100%;
height: 100%;
`