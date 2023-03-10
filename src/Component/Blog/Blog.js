import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="text-center mt-20 lg:mx-20 mx-3 ">
      <div className="border-2 p-5 shadow-lg mb-5 bg-slate-200">
        <h1 className="mb-5 text-2xl font-bold text-slate-700">What is cors?</h1>
        <p>
          Ans:Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
        </p>
      </div>
      <div className="border-2 p-5 shadow-lg mb-5 bg-slate-200">
        <h1 className=" text-2xl font-bold mb-5 text-slate-700"> Why are you using firebase? What other options do you have to implement authentication?</h1>
        <p>
          Ans:Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
        </p>
      </div>
      <div className="border-2 p-5 shadow-lg mb-5 bg-slate-200">
        <h1 className="mb-5 text-2xl font-bold text-slate-700">How does the private route work?</h1>
        <p>
          Ans:The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property
        </p>
      </div>
      <div className="border-2 p-5 shadow-lg mb-5 bg-slate-200">
        <h1 className="mb-5 text-2xl font-bold text-slate-700">What is Node? How does Node work??</h1>
        <p>
          Ans:It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </p>
      </div>
    </div>
        </div>
    );
};

export default Blog;