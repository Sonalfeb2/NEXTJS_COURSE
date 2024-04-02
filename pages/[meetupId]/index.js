import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetUpId = (props) =>{
    return (
        <MeetupDetail meetupData={props.meetupData}/>
    )
}
export async function getStaticPaths () {  ////this is the function for regenerated the page of matches path 
    return{
        fallback: false,
        paths: [
            {
                params: {
                    meetupId : "M1"
                }
            },
            {
                params: {
                    meetupId : "M2"
                }
            },
            {
                params: {
                    meetupId : "M3"
                }
            },
        ]
    }
}
export async function getStaticProps(context) { /// get data in pre-render pages before component mound
  const id = context.params.meetupId;
return {
    props: {
        meetupData:{
        id: id,
        image : "https://picsum.photos/id/237/200/300",
        address: "some city, some state 123455",
        title: "Meet Up",
        description: "WonderFul Meet"}
    }
}
}
export default MeetUpId