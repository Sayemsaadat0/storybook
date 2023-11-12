import React from "react";

type buttonType = {
  variant: "blue" | "red" | "yellow";
  label: string;
  size : 'small' | 'medium' | 'large' ,
  color : 'black' | 'white'
};
const TmButton = ({ variant = "blue", label, size='medium' , color = 'white' }: buttonType) => {
  return <button  style={{ background: variant , color : color, padding: '10px 20px' ,border:0, borderRadius:'20px'}}>{label}</button>;
};

export default TmButton;
