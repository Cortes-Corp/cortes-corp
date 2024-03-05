import data from "./data.json";

interface PageProps {
  params: { person: string };
}
interface PersonInfo {
  fullName: string;
  bio: string;
}


interface Data {
  [key: string]: PersonInfo;
}
function page({ params }: PageProps) {
  const agent = (data as Data)[params.person];
  if (agent) {
    return <div></div>;
  }
}

export default page;
