import styled from "styled-components";
import { useState } from "react";

type RatingStarsType = {
    classname?: string,
    label?: string | any,
    Children?: any
}


const RatingStars = ({classname} : RatingStarsType) => {
    const [rating, setRating] = useState(0);
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className={classname}>
            {stars.map((star) => (
                <span
                key={star}
                onClick={() => setRating(star)}
                style={{
                    cursor: "pointer",
                    fontSize: "28px",
                    color: star <= rating ? "#FFD700" : "#ccc",
                    transition: "color 0.2s ease"
                }}
                >
                ★
                </span>
            ))}
        </div>
    );
};
export default styled(RatingStars)`
width: 100%;
height: 100%;
`