export const RefreshRequest = (res, refresh) => {
  if (res.detail === "Given token not valid for any token type" && refresh) {
    fetch("https://poppymail.shop/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: refresh,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          if (res.detail === "Token is invalid or expired") {
            localStorage.clear();
          } else {
            localStorage.setItem("access", res.access);
          }
        }
      });
  }
};
