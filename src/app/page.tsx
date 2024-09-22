import LatestPosts from "@/components/home/latest-posts";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/ui/main-nav";

export default function Home() {
  return (
    <>
      <MainNav />
      <main>
        <div>
          <LatestPosts />
          <Button>Click me</Button>
        </div>
      </main>
    </>
  );
}
