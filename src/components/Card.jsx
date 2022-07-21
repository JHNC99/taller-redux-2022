import React from "react";
import { useDispatch } from "react-redux";
import { removePost } from "../store/slices/postsSlices";
const Card = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button
        className="btn btn-delete"
        onClick={() => dispatch(removePost(item.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
