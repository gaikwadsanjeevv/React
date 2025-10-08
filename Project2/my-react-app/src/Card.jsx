import profilepic from "./assets/mypic.jpeg";
function Card() {
  return (
    <div className="card">
        <img className="card-image" src ={profilepic} alt="profile pic"></img>
        <h2 className="card-title">Sanjeev Coder</h2>
        <p className="card-text">I make Digital Content</p>
         </div>
  );
}

export default Card;