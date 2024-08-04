export function loginAction() {
  return {
    type: "USER/LOGIN",
    payload: {
      user: {
        name: "demo",
      },
      token: "demo",
    },
  };
}
