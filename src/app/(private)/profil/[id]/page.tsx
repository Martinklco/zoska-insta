import ProfileDetailView from "@/sections/private/ProfileDetailView";

export const metadata = { title: "Detail profilu | ZoškaSnap" };

export default function ProfileDetail({
  params,
}: {
  params: { id: string };
}) {
  return <ProfileDetailView userId={params.id} />;
}
