import styled from "styled-components";
import "../../assets/css/feedbackPage.css";
import ProfessorSelect from "../../component/feedback/FeedBackSelect";
import RatingStars from "../../component/feedback/StarsAval";
import FeedbackTextarea from "../../component/feedback/TextAreaAval";

const FeedbackPage = () => {
    const prof = ['Jose', 'Cleber']
  return (
    <main className="feedback-container">
      <div className="feedback-card">
        <div className="feedback-header">
            <h3>Dê seu feedback</h3>
            <p>Dê abaixo sua avaliação, lembre-se de selecionar o professor!</p>
        </div>
        <ProfessorSelect classname="professor-select">
            {prof.map((p) => (
                <option key={p} value={p}>{p}</option>
            ))}
        </ProfessorSelect>
        <RatingStars classname="rating-stars"/>
        <FeedbackTextarea classname="feedback-textarea"/>
      </div>
    </main>
  );
};

export default styled(FeedbackPage)``;