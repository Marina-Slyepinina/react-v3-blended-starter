import { FiSearch } from "react-icons/fi";
import style from "./Form.module.css";

interface FormProps {
  onSubmit: (value: string) => void;
}

export default function Form({ onSubmit }: FormProps) {

  const handleSubmit = (formData: FormData) => {
    const value = formData.get("search");

    // Перевірка, якщо у value = formData.get("search") передали неіснуєче в коді значення "name" 
    if (value === null) return;

    // Типізуємо і забираємо зайві пробіли
    const query = (value as string).trim();
    
    // Первірка на "пустий рядок"
    if (!query) {
      console.log("Please enter the query");
      return;
    }

    onSubmit(query);
  }

  return (
    <form action={handleSubmit} className={style.form}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />

      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
