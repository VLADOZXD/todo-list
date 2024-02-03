const Spinner = () => {
  return (
    <div className="h-full w-48 flex justify-center">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="h-20 w-20 animate-spin rounded-full border-8 border-t-gray-400" />
        <span className="mt-2">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
