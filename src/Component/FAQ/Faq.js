import React from 'react';

const Faq = () => {
    return (
        <div>
            <div>
            <div className="text-center mt-20 lg:mx-20 mx-3 ">
      <div className="border-2 p-5 shadow-lg mb-5 bg-slate-200">
        <h1 className="mb-5 text-2xl font-bold text-slate-700">What is the purpose of React router?</h1>
        <p>
          Ans:React Router is a standard library for routing in React. It
          enables the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL. Let us create a simple application to React to
          understand how the React Router works
        </p>
      </div>
      <div className="border-2 p-5 shadow-lg mb-5 bg-slate-200">
        <h1 className=" text-2xl font-bold mb-5 text-slate-700">How does contest API work?</h1>
        <p>
          Ans:The React Context API is a way for a React app to effectively
          produce global variables that can be passed around. This is the
          alternative to "prop drilling" or moving props from grandparent to
          child to parent, and so on. Context is also touted as an easier,
          lighter approach to state management using Redux.
        </p>
      </div>
      <div className="border-2 p-5 shadow-lg mb-5 bg-slate-200">
        <h1 className="mb-5 text-2xl font-bold text-slate-700">What is useRef hook and how does it works?</h1>
        <p>
          Ans:The useRef is a hook that allows to directly create a reference to
          the DOM element in the functional component.How does useRef hook work?
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </div>
    </div>
        </div>
        </div>
    );
};

export default Faq;