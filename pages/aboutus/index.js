import Link from 'next/link'
const AboutUs = () =>{
    return (
      <div>About Us Page
        <ul>
          <li><Link href="/aboutus/1">Yash</Link></li>
          <li><Link href="/aboutus/2">Vaibhav</Link></li>
          <li><Link href="/aboutus/3">Suresh</Link></li>
        </ul>
      </div>
    )
  }
  export default AboutUs;