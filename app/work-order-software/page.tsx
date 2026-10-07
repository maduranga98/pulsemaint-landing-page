import { PillarPage, pillarMetadata } from "../pillar-template";
import { getPillar } from "../pillar-pages";

const page = getPillar("work-order-software");

export const metadata = pillarMetadata(page);

export default function Page() {
  return <PillarPage page={page} />;
}
