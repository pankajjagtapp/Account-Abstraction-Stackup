import React from "react";
import { Button } from "react-bootstrap";

const Commonbutton = ({ ...props }) => {
  const {
    secondary,
    leftIcon,
    label,
    onlyIcon,
    customclass,
    title,
    customTitle,
    onClick = () => {},
    disabled
  } = props;
  return (
    <Button
      className={`${secondary ? "secondary" : ""} ${customclass}`}
      {...props}
      onClick={onClick}
      disabled={disabled ? disabled : false}
      title={customTitle ? customTitle : title}
    >
      {title}
      {leftIcon && <span className="leftIcon">{leftIcon}</span>}
      {label && label}
      {onlyIcon && <span className="onlyIcon">{onlyIcon}</span>}
    </Button>
  );
};

export default Commonbutton;
