const { shuffleArray } = require("../utils/hook/shuffleArray");
const { Physics } = require("../utils/question_bank/physics");

const questionGeneratorController = async (req, res) => {
  const e = 1;
  const m = 5;
  const h = 10;
  try {
    const { easy, medium, hard, marks } = req.body;
    let easyMarks = (easy * marks) / 100;
    let medMarks = (medium * marks) / 100;
    let hardMarks = (hard * marks) / 100;

    try {
      if (easyMarks % e !== 0) {
        throw new Error("Set values to whole number for easy questions");
      } else if (medMarks % m !== 0) {
        throw new Error("Set values to whole number for medium questions");
      } else if (hardMarks % h !== 0) {
        throw new Error("Set values to whole number for hard questions");
      }
    } catch (error) {
      next(error);
    }

    const easyQuestions = easyMarks / e;
    const medQuestions = medMarks / m;
    const hardQuestions = hardMarks / h;

    let easyq = shuffleArray(Physics.Easy);
    let medq = shuffleArray(Physics.Medium);
    let hardq = shuffleArray(Physics.Hard);
    let finalArray = [
      ...easyq.slice(easyQuestions),
      ...medq.slice(medQuestions),
      ...hardq.slice(hardQuestions),
    ];

    console.log(finalArray);

    res.send("Blah");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  questionGeneratorController,
};
