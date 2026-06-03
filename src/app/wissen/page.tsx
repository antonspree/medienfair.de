import { redirect } from "next/navigation";
import { getDefaultWissenSlug } from "@/content/wissen/terms";

export default function WissenIndexPage() {
  redirect(`/wissen/${getDefaultWissenSlug()}`);
}
