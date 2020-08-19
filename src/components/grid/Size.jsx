import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setSize } from "../../store/grid-slice";
import styles from "./Size.module.css";

const Size = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();

  const sizeDemand = {
    required: "Обязательное поле",
    validate: (val) => {
      const isValid = val >= 2 && val <= 6 && val % 2 !== 1;
      return isValid || "Введите четное число, НЕ меньше двух и НЕ больше 6";
    },
  };

  const successSubmit = (form) => {
    dispatch(setSize(Number(form.size)));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(successSubmit)}>
      <h2>Введите размерность: (четное число, НЕ меньше 2 и НЕ больше 6) </h2>
      <div>
        <input type="number" name="size" ref={register(sizeDemand)} />
        <span className={styles.error}>{errors.size && errors.size.message}</span>
      </div>
      <input type="submit" value="Создать" />
    </form>
  );
};

export default Size;
