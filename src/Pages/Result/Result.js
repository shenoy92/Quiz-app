import { Button } from "@material-ui/core";

const Result = ({ name, score,ques1,ques2,ques3,ques4,data}) => {
    var percentage=(score/4)*100
  return (
    <div className="result">
      <span >Final Score : {score}</span>
      <span>Percentage Scored: {percentage}%</span>
      
      <table id="table">
          <tr>
              <th>Question</th>
              <th>Your Answer</th>
              <th>Correct Answer</th>
              <th>Difficulty Level</th>
          </tr>
          <tr>
              <td>{data[0].question}</td>
              <td>{ques1}</td>
              <td>{data[0].answer}</td>
              <td>{data[0].difficulty}</td>
          </tr>
          <tr>
              <td>{data[1].question}</td>
              <td>{ques2}</td>
              <td>{data[1].answer}</td>
              <td>{data[1].difficulty}</td>
          </tr>
          <tr>
              <td>{data[2].question}</td>
              <td>{ques3}</td>
              <td>{data[2].answer}</td>
              <td>{data[2].difficulty}</td>
          </tr>
          <tr>
              <td>{data[3].question}</td>
              <td>{ques4}</td>
              <td>{data[3].answer}</td>
              <td>{data[3].difficulty}</td>
          </tr>
        </table>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;