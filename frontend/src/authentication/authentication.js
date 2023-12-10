const authentication = (AccessToken, navigate) => {
  if (!AccessToken) {
    navigate("/login");
    return;
  }
  const accessToken = localStorage.getItem("accessToken");
  if (AccessToken == accessToken) {
    navigate("/home");
  }
};

export { authentication };
