const express = require("express");

const app = express();

const questionsRoutes = require("./routes/questionPaper");

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/questionsGenerator", questionsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
