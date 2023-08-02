import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import ejs from "ejs";
import { error } from "console";

const app = express();
const port = 3000;
const URL = "icanhazdadjoke.com";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(response.data.joke);
    res.render("index.ejs", { joke: response.data.joke });
  } catch (error) {
    console.log(error.response);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
