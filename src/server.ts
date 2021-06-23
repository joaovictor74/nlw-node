import express, { response } from "express";

const app = express();

app.get("/test", (request,response) => {
    return response.send("hi nlw");
});
app.post("/test-post" , (resquest,response) => {
    return response.send("ola do post");

})
app.listen(3000,() => console.log("server is running"));