import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) =>{
  
  return (
    <div>Home Page
      <MeetupList meetups={props.meetups}/>
    </div>
  )
}
export async function getStaticProps (){
  const url ="mongodb+srv://sonal:5zsSlXfuybPLlle7@cluster0.9caborj.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0";

  const client = await MongoClient.connect(url);
  const db = client.db();
  const collection = db.collection('meets')
  const find = await collection.find().toArray();
  client.close();
  
  return {
    props: {
      meetups :find.map((meetups)=>({
        title: meetups.title,
        description: meetups.description,
        image: meetups.image,
        address: meetups.address,
        id: meetups._id.toString()
      }))
    },
    revalidate: 10
  }

}
export default HomePage;