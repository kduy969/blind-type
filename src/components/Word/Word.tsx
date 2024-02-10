import React from "react";
import css from "./Word.module.css";

type WordProps = {
  text: string;
};

const Word: React.FC<WordProps> = props => {
  return <div className={css.text}>{props.text}</div>;
};

export default Word;
