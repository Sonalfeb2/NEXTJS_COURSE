import { useRouter } from "next/router";
const DetailPage = () => {
  const details = [
    { id: "1", name: "Yash", role: "Senior Developer" },

    { id: "2", name: "Vaibhav", role: "Backend Developer" },

    { id: "3", name: "Suresh", role: "Frontend Developer" }
  ];

  const router = useRouter();
  const id = router.query.developerId;
  const fetchObj = details.filter(list => list.id === id);

  return (
    <div>
      {fetchObj.length > 0
        ? <div>
            <h1>
              Name - {fetchObj[0].name}
            </h1>
            <h1>
              Role- {fetchObj[0].role}
            </h1>
          </div>
        : <h1>Developer Doesn't Exist</h1>}
    </div>
  );
};
export default DetailPage;
