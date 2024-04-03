import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from 'next/router'
const NewMeetUp = () => {
  const router = useRouter();
  const newMeetUp = async e => {
    const res = await fetch("api/new-meetup", {
      method: "POST",
      body: JSON.stringify(e),
      headers:{
        'Content-Type':'application/json'
      }
    });
    const data = await res.json();
    if(data.message==='created'){
    router.push('/')
    }
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={e => newMeetUp(e)} />
    </div>
  );
};
export default NewMeetUp;
