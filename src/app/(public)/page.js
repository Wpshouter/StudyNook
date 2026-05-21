import Image from "next/image";
export const metadata = {
  title: 'StudyStudyNook – Home',
}
import NewBanner from "@/componenet/Homepage/NewBanner";
import HomeExtraSections from "@/componenet/Homepage/HomeExtraSections";
export default function Home() {
  return (
    <div className="">
          <NewBanner/>
          <HomeExtraSections />
    </div>
  );
}
