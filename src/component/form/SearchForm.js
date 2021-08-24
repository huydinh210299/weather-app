import React from "react";
import { useForm } from "react-hook-form";
import "./SearchForm.css";
const SearchForm = ({ handleRequest }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(handleRequest)} id="search-form">
      <input
        type="text"
        name="location"
        placeholder="Type the location"
        {...register("location")}
      ></input>
      <button type="submit" className="btn-grad">
        SEARCH
      </button>
    </form>
  );
};

export default SearchForm;
