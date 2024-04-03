import Card from "../ui/Card";
import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    
      <div  className= {classes.detail}>
        <div>
          <img src={props.meetupData.image} alt={props.meetupData.title} />
        </div>
        <div className={classes.content}>
          <h3>
            {props.meetupData.title}
          </h3>
          <address>
            {props.meetupData.address}
          </address>
          <p>
            {props.meetupData.description}
          </p>
          </div>
        </div>
      

  );
}

export default MeetupDetail;
