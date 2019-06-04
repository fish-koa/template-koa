import app from "./app";

const port = 8080;

app.listen(port, () => {
    console.log("server is listening http://localhost:" + port);
});
