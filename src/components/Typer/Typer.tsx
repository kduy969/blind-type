import React from "react";
import Word from "../Word/Word";
import css from "./Typer.module.css";

interface TyperProps {
  words: string[];
}

const Typer: React.FC<TyperProps> = ({ words }) => {
  return (
    <div className={css.body}>
      {words.map((word, index) => (
        <Word key={index} text={word} />
      ))}
    </div>
  );
};

export default Typer;
