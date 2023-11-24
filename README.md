# Reelo-Assignment

# Questions Generator API

This Node.js API provides a questions generator at the endpoint `/api/questionsGenerator`. Users can specify the difficulty level of questions (easy, medium, or hard) and the associated marks by providing input through query parameters.


## Query Parameters

- **easy**: Number of easy-level questions to generate.
- **medium**: Number of medium-level questions to generate.
- **hard**: Number of hard-level questions to generate.
- **marks**: Total marks for the generated questions.

## Example Usage

To generate 5 easy, 3 medium, and 3 hard-level questions with a total mark value of 50, you can use the following curl command:

```bash
curl -X GET "https://reelo-assignment.onrender.com/api/questionsGenerator?easy=10&medium=30&hard=60&marks=50"



