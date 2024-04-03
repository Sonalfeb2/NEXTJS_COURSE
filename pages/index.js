import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
const dummyMeetUps = [{
  id : "M1",
  title: "First MeetUp",
  image: "https://picsum.photos/id/237/200/300",
  address:"Some State , Som City , 10, 455588",
  description: "This is a First Meet Up"

},
{
  id : "M2",
  title: "Second MeetUp",
  image: "https://picsum.photos/id/237/200/300",
  address:"Some State , Some City , 10, 455588",
  description: "This is a Second Meet Up"

},
{
  id : "M3",
  title: "Third MeetUp",
  image: "https://picsum.photos/id/237/200/300",
  address:"Some State , Som City , 10, 455588",
  description: "This is a Third Meet Up"

}
]
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