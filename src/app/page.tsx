// import Container from "@/components/Container";
// import LatestPosts from "@/components/home/latest-posts";
// import { Button } from "@/components/ui/button";
// import { MainNav } from "@/components/ui/main-nav";

// export default function Home() {
//   return (
//     <>
//       <Container>
//         <MainNav />
//         <main className="flex flex-col mt-16 md:flex-row">
//           <div className="mx-auto">
//             <LatestPosts />
//             <Button>Click me</Button>
//           </div>
//         </main>
//       </Container>
//     </>
//   );
// }

import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-posts";
import PopularPosts from "@/components/home/popular-posts";
import TopCatogories from "@/components/home/top-categories";
import { MainNav } from "@/components/ui/main-nav";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col mt-16 md:flex-row">
        <div className="mx-auto">
          <LatestPosts />
        </div>
        <div className="h-screen">
          <div>
            <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
            <TopCatogories />
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4">POPULAR POSTS</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );
}
