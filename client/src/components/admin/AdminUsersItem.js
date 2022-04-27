import React, {useState} from "react";
import axios from "axios";
import { BsArrowDownSquare, BsArrowUpSquare } from 'react-icons/bs'

export default function AdminUsersItem(props) {
  
  // set the state to render current level
  const [level, setLevel] = useState(props.level);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/admin/users/${props.id}`, {level: event.target.value })
      .then((res) => {
        console.log("from server: res.data.lavel", res.data);
        setLevel(res.data.level);
      })
      .catch((err) => {
        console.log("admin errors:", err);
      });
    };
  
    const numOfApproval = props.handleCommentApproval;
    const numOfRejection = props.handleCommentRejection; 
    const approvalRate = function(numOfApproval, numOfRejection) { 
      const numOfTotalComments = numOfApproval + numOfRejection;
      let result = Math.round(100 * numOfApproval / numOfTotalComments);
      if (!isNaN(result)) {
        return result;
      } 
    };

    const userScore = function(numOfApproval, numOfRejection) { 
      const numOfTotalComments = numOfApproval + numOfRejection; 
      const approvalRate = (100 * numOfApproval / numOfTotalComments);
      if (approvalRate >= 98) {
        return "User Score: Excellent";
      } else if (approvalRate >= 95) {
        return "User Score: Satisfactory";
      } else if (approvalRate >= 90) {
        return "User Score: Fair";
      } else if (approvalRate >= 85) {
        return "User Score: Need Improvement";
      } else if (isNaN(approvalRate)) {
        return "not available";
      } else {
        return "User Score: !!immediate review!!";
      }
     }

  
  return (
<>
      <div className="admin-user-item-container">
        <article className="user-card">
          <header className="admin-header">
            <div className="admin-user-name">{props.name}</div>
            <div className="level-arrow-container">
            <BsArrowUpSquare type="submit" className="level-arrows" onClick={handleSubmit} value={1}/>
            <BsArrowDownSquare type="submit" className="level-arrows" onClick={handleSubmit} value={-1}/>
            </div>
          </header>
          <div className="admin-user-body">
            <p>{props.email}</p>
            <p>Level: {level}</p>
            <p># of Comments Approved: {props.handleCommentApproval}</p>
            <p># of Comments Rejected: {props.handleCommentRejection}</p>
            <p>Approval Rate: {approvalRate(props.handleCommentApproval, props.handleCommentRejection)} </p>
            <span>{userScore(numOfApproval, numOfRejection)}</span>
            
            </div>
          <footer className="post--footer">
            <small className="footer--age">{props.time}</small>
            <br/>
            <button className="btn-small">Delete User</button>
          </footer>
        </article>
      </div>
      </>
  );
}
