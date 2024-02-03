interface ButtonProps {
  text: string;
  color: string;
  onClick?: () => void;
}

const Button = ({ text, color, onClick }: ButtonProps) => {
  let colorButton;

  if (color === "green") {
    colorButton = "bg-green-500 text-green-50 hover:bg-green-400";
  } else if (color === "red") {
    colorButton = "bg-red-500 text-red-50 hover:bg-red-400";
  }

  return (
    <button
      className={
        colorButton + " py-2 rounded-lg mt-5 shadow ease-in-out duration-300"
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
