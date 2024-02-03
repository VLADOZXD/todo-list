interface InputProps {
  placeholder?: string;
  error?: boolean;
  onEnter: (enteredTask: string) => void;
}

const Input = ({ placeholder, error, onEnter }: InputProps) => {
  return (
    <input
      className={
        error
          ? "py-2 px-3 rounded-md border border-red-400 focus:outline-none"
          : "py-2 px-3 rounded-md border border-gray-200 focus:border-green-400 "
      }
      placeholder={placeholder}
      onChange={(event) => onEnter(event.target.value)}
    />
  );
};

export default Input;
