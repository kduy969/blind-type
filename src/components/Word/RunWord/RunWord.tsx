import React from "react";

interface RunningWordProps {
  full: string;
  cursorIndex?: number;
  fadeColor?: string;
  completeColor?: string;
  errorColor?: string;
}

const RunningWord: React.FC<RunningWordProps> = ({
  full,
  cursorIndex,
  fadeColor,
  completeColor,
  errorColor,
}) => {
  return null;
};

export default RunningWord;
