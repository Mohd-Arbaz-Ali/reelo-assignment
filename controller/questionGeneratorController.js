const { random, shuffle } = require("lodash");
const { Physics } = require("../utils/question_bank/physics");

const questionGeneratorController = async (req, res) => {
  const e = 1;
  const m = 5;
  const h = 10;
  try {
    const { easy, medium, hard, marks } = req.query;
    let easyMarks = (easy * marks) / 100;
    let medMarks = (medium * marks) / 100;
    let hardMarks = (hard * marks) / 100;

      if (easyMarks % e !== 0) {
        throw new Error("Set values to whole number for easy questions");
      } else if (medMarks % m !== 0) {
        throw new Error("Set values to whole number for medium questions");
      } else if (hardMarks % h !== 0) {
        throw new Error("Set values to whole number for hard questions");
      }

    const easyQuestions = easyMarks / e;
    const medQuestions = medMarks / m;
    const hardQuestions = hardMarks / h;

    let easyq = shuffle(Physics.Easy);
    let medq = shuffle(Physics.Medium);
    let hardq = shuffle(Physics.Hard);
    let finalArray = {
      "easy": [...easyq.slice(0, easyQuestions)],
      "medium":[...medq.slice(0, medQuestions)],
      "hard":[...hardq.slice(0, hardQuestions)],
    };


    res.status(200).send(finalArray);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  questionGeneratorController,
};
