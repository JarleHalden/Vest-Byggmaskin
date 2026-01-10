import Slideshow from "../components/Slideshow";

export default function Home() {
  return (
    <Slideshow
      images={[
        "https://picsum.photos/1200/400?random=1",
    "https://picsum.photos/1200/400?random=2",
    "https://picsum.photos/1200/400?random=3",
      ]}
      intervalMs={4000}
    />
  );
}
