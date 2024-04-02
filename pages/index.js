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
  return {
    props: {
      meetups :dummyMeetUps
    },
    revalidate: 10
  }

}
export default HomePage;