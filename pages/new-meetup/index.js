import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from 'next/router'
import { Fragment } from "react";
import Head from "next/head";
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
    <Fragment>
      <Head>
        <title>New Meetups Form</title>
        <meta
          name="description"
          content="Create New Meet Up with all details"
        />
        </Head>
      <NewMeetupForm onAddMeetup={e => newMeetUp(e)} />
      </Fragment>
    
  );
};
export default NewMeetUp;
