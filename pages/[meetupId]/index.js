import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
const MeetUpId = props => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>{" "}
      <MeetupDetail meetupData={props.meetupData} />;
    </Fragment>
  );
};
export async function getStaticPaths() {
  ////this is the function for regenerated the page of matches path
  const url =
    "mongodb+srv://sonal:5zsSlXfuybPLlle7@cluster0.9caborj.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0";
  const client = await MongoClient.connect(url);
  const db = client.db();
  const collection = db.collection("meets");
  const meetupIds = await collection
    .find({}, { projection: { _id: 1 } })
    .toArray();
  client.close();

  return {
    fallback: false,
    paths: meetupIds.map(obj => ({ params: { meetupId: obj._id.toString() } }))
  };
}
export async function getStaticProps(context) {
  const url =
    "mongodb+srv://sonal:5zsSlXfuybPLlle7@cluster0.9caborj.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0";
  /// get data in pre-render pages before component mound
  const meetupId = context.params.meetupId;
  const id = new ObjectId(meetupId);
  const client = await MongoClient.connect(url);
  const db = client.db();
  const collection = db.collection("meets");
  const selectedMeetUp = await collection.findOne({ _id: id });
  client.close();
  return {
    props: {
      meetupData: {
        title: selectedMeetUp.title,
        description: selectedMeetUp.description,
        image: selectedMeetUp.image,
        address: selectedMeetUp.address,
        id: selectedMeetUp._id.toString()
      }
    },
    
  };
}
export default MeetUpId;
