import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      prompt: "login",
    },
    returnTo: "/upload",
  }),
  signup: handleLogin({
    authorizationParams: {
      prompt: "login",
      screen_hint: "signup",
    },
    returnTo: "/upload",
  }),
});
