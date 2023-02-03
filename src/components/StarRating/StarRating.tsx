import React from 'react';

type UserRatings = {
    ratings: number
}

const StarRating = ({ ratings }: UserRatings) => {

    return (
        <div>
            {
                [...Array(ratings)].map((star, index) => {
                    return (
                        <span key={index} className="text-amber-500 text-lg">&#9733;</span>
                    )
                })
            }
        </div>
    );
};

export default StarRating;