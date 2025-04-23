// src/app/prispevok/[id]/page.tsx

import PostDetailView from "@/sections/private/PostDetailView";

export const metadata = {title: "Detail konkrétneho príspevku | Zoska"}

export default function PostPage({ params }: { params: { prispevokId: string } }) {
  return <PostDetailView params={{ id: params.prispevokId }} />;
}