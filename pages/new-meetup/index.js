import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetUp = () => {
  const newMeetUp = data => {
    console.log(data);
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={e => newMeetUp(e)} />
    </div>
  );
};
export default NewMeetUp;
