import { useState } from "react";
import styles from "./WeatherForm.module.css";

export const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  const onHandleChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className={styles.container}>
        <input type="text" onChange={onHandleChange} className={styles.input} />
      </form>
    </div>
  );
};
