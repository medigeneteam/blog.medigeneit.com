function Mail() {
  return (
    <>
      <a
        className="text-sm text-gray-500 transition hover:text-gray-600"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:medigeneit@gmail.com"
      >
        <span className="sr-only">mail</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        </svg>
      </a>
    </>
  );
}

export default Mail;
