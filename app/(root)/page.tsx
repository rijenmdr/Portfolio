import ContentImage from "@/container/home/ContentImage";
import ContentLeft from "@/container/home/ContentLeft";
import ContentSocialMedia from "@/container/home/ContentSocialMedia";

export default function Home() {
  return (
    <section className="flex flex-col-reverse lg:flex-row w-full justify-between items-center">
      <ContentLeft />

      <ContentImage />

      <ContentSocialMedia />
    </section>
  );
}
