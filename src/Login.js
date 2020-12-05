import React, { useReducer, createContext } from "react";
import "./Login.css";
import { login } from "./utils/login";
import App from "./App";

function loginReducer(state, action) {
  switch (action.type) {
    case "field": {
      return { ...state, [action.field]: action.value };
    }
    case "login":
      return { ...state, isLoading: true, error: "" };
    case "success":
      return { ...state, isLoading: false, isLoggedIn: true };
    case "error": {
      return { ...state, isLoading: false, error: "Incorrect username or password" };
    }
    case "logout":
      return initialState;
    default:
      return state;
  }
}

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

export const DispatchContext = createContext();

export default function Login() {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const { username, password, isLoading, error, isLoggedIn } = state;

  async function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "login" });

    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  }

  if (isLoggedIn)
    return (
      <DispatchContext.Provider value={dispatch}>
        <App />
      </DispatchContext.Provider>
    );

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-logo">{"{Everyday}"}</div>

      <div className="input-field">
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => dispatch({ type: "field", field: "username", value: e.currentTarget.value })}
        />
        <label htmlFor="username">Username</label>
      </div>

      <div className="input-field">
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => dispatch({ type: "field", field: "password", value: e.currentTarget.value })}
        />
        <label htmlFor="password">Password</label>
      </div>

      <button className="btn btn-login" type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Log in!"}
      </button>

      {error && <p className="red-text lighten-3">{error}</p>}
      <p>mango/pasta</p>
    </form>
  );
}
