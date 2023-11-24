const express = require("express");

const app = express();

const questionsRoutes = require("./routes/questionPaper");

const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use("/api/questionsGenerator", questionsRoutes);

app.use("/", (req, res)=>{
  res.send(
    "Question Generator API at api/qusetionsGenerator/ endpoint.<br>Query parameters: easy, medium, hard & marks.<br> Example Usage: https://reelo-assignment.onrender.com/api/questionsGenerator?easy=10&medium=30&hard=60&marks=50"
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
