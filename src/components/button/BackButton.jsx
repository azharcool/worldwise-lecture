import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate(-1);
      }}
      type="back"
    >
      &larr; back
    </Button>
  );
}

export default BackButton;
