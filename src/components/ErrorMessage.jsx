function ErrorMessage({ message }) {
    return (
      <div className="text-red-600 bg-red-100 border border-red-400 p-3 rounded-md mt-4">
        ❌ {message}
      </div>
    );
  }
  
  export default ErrorMessage;
  