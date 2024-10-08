"use client";

import { popularPosts } from "@/lib/placeholder-data";
import { fetcher, fetchUrl } from "@/lib/utils";
import { Icons } from "../icons";
import Link from "next/link";
import useSWR from "swr";
import SkeletonCard from "../../components/skeleton/popular_posts_skeleton";

export default function PopularPosts() {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <SkeletonCard />;
  // if (isLoading) return <h1>Loading...</h1>;

  return (
    <ul className="overflow-auto">
      {data?.map((post: { category: string; slug: string; title: string }) => (
        <Link href={`/blog/${post.category}/${post.slug}`} key={post.title}>
          <li className="flex items-center gap-2 group cursor-pointer py-2">
            <Icons.arrowRight className="h-6 w-6 gr oup-hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

// export default function PopularPosts() {
//   return (
//     <>
//       <ul>
//         {popularPosts.map((post) => {
//           return (
//             <Link href={`/blog`} key={post.title}>
//               <li className="flex flex-center gap-2 cursor-pointer py-2 group">
//                 <Icons.arrowRight className="transition-transform group-hover:translate-x-1" />
//                 <span>{post.title}</span>
//               </li>
//             </Link>
//           );
//         })}
//       </ul>
//     </>
//   );
// }
