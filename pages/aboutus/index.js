import Link from "next/link";
import { Fragment } from "react";
import Head from "next//head";
const AboutUs = () => {
  return (
    <Fragment>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About for Admins" />
      </Head>

      <ul>
        <li>
          <Link href="/aboutus/1">Yash</Link>
        </li>
        <li>
          <Link href="/aboutus/2">Vaibhav</Link>
        </li>
        <li>
          <Link href="/aboutus/3">Suresh</Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default AboutUs;
