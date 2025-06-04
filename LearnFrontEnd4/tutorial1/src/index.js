import React from 'react';
import ReactDOM from 'react-dom/client';


const myFirstElement = (
  <>
    <table className="myTable">
      <tr>
        <th>Player</th>
        <th>Team</th>
      </tr>
      <tr>
        <td>J Burrow</td>
        <td>QB</td>
      </tr>
      <tr>
        <td>D Henry</td>
        <td>RB</td>
      </tr>
      <tr>
        <td>A Kamara</td>
        <td>RB</td>
      </tr>
      <tr>
        <td>M Nabers</td>
        <td>WR</td>
      </tr>
    </table>
  </>
)

/* class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}*/

function Car(props) {
  return <h2>I am a {props.color} Car!</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);


