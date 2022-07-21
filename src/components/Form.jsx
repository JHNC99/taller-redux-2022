import React from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../store/slices/postsSlices";
import useForm from "../hooks/useForm";
import useUUI from "../hooks/useUUI";
const Form = () => {
  const dispatch = useDispatch();
  const [e5] = useUUI();
  const [value, handleChange] = useForm({
    title: "",
    description: "",
  });
  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        id: e5(),
        title: value.title,
        description: value.description,
      })
    );
  };
  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
      />
      <input
        name="description"
        type="text"
        placeholder="description"
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-add">
        Add
      </button>
    </form>
  );
};

export default Form;
