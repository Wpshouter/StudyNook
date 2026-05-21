import Image from "next/image";
export const metadata = {
  title: 'StudyNook – Home',
}
import NewBanner from "@/componenet/Homepage/NewBanner";
import HomeExtraSections from "@/componenet/Homepage/HomeExtraSections";
import DynamicFeaturedRoom from "@/componenet/Homepage/DynamicFeaturedRoom";
export default function Home() {
  return (
    <div className="">
          <NewBanner/>
          <DynamicFeaturedRoom />
          <HomeExtraSections />
    </div>
  );
}
