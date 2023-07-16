import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/newRequest.js";
import "./Review.scss";
const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery(
    {
      queryKey: [review.userId],
      queryFn: () =>
        newRequest.get(`/users/${review.userId}`).then((res) => {
          return res.data;
        }),
    },
  );
  return (
    <div className="review">
      {isLoading ? (
        "Загрузка..."
      ) : error ? (
        "ошибка"
      ) : (
        <div className="user">
          <img className="pp" src={data.img || "/img/noavatar.jpg"} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/img/star.png" alt="" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Полезно?</span>
        <img src="/img/like.png" alt="" />
        <span>Да</span>
        <img src="/img/dislike.png" alt="" />
        <span>Нет</span>
      </div>
    </div>
  );
};

export default Review;
