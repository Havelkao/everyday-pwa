export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "mango" && password === "pasta") {
        console.log("You have done it!");
        resolve();
      } else {
        console.log("Oh snap");
        reject();
      }
    }, 1000);
  });
}
