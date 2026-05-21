import Image from "next/image";
export const metadata = {
  title: 'StudyStudyNook – Home',
}
import NewBanner from "@/componenet/Homepage/NewBanner";
export default function Home() {
  return (
    <div className="">
          <NewBanner/>
    </div>
  );
}
