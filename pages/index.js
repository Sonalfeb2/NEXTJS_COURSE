import MeetupList from '../components/meetups/MeetupList'
const HomePage = () =>{
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
  return (
    <div>Home Page
      <MeetupList meetups={dummyMeetUps}/>
    </div>
  )
}
export default HomePage;