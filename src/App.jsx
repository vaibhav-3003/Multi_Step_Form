import { useState } from "react";
import Form from "./components/Form";

function App() {

  const [page, setPage] = useState(0)
  const pages = ["SignUp","Personal Info","Other"];


  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {/* stepper */}
      <div className="w-1/2 flex items-center justify-center">
        <ul className="steps w-full">
          <li className="step step-success" data-content="1">
            Sign Up
          </li>

          {page >= 1 ? (
            <li className="step step-success" data-content="2">
              Personal Info
            </li>
          ) : (
            <li className="step" data-content="2">
              Personal Info
            </li>
          )}

          {page === 2 ? (
            <li className="step step-success" data-content="3">
              Other
            </li>
          ) : (
            <li className="step" data-content="3">
              Other
            </li>
          )}
        </ul>
      </div>

      {/* title*/}
      <div className="w-1/2 py-3">
        <h1 className="text-center text-3xl font-semibold">
          {page === 0 ? "SignUp" : page === 1 ? "Personal Info" : "Other"}
        </h1>
      </div>

      {/* main body */}
      <div className="w-1/2 flex justify-center items-center px-20 py-2">
        <Form page={page} />
      </div>

      {/* prev or next button */}
      <div className="w-1/2 flex justify-center items-center py-4">
        <button
          // className="bg-blue-500 px-10 py-2 text-white font-semibold rounded-full shadow-lg mr-5"
          className={`bg-blue-500 px-10 py-2 text-white font-semibold rounded-full shadow-lg mr-5 ${
            page <= 0
              ? "cursor-not-allowed opacity-50"
              : "bg-blue-500 px-10 py-2 text-white font-semibold rounded-full shadow-lg mr-5"
          } `}
          disabled={page <= 0 ? "disabled" : ""}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        {page === 2 ? (
          <button
            type="submit"
            className="bg-green-500 px-10 py-2 text-white font-semibold rounded-full shadow-lg"
          >
            Submit
          </button>
        ) : (
          <button
            className="bg-green-500 px-10 py-2 text-white font-semibold rounded-full shadow-lg"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default App
