import { ja } from "../i18n/ja";
import { LocalizedHome, localizedHomeMetadata } from "../localized-home";

export const metadata = localizedHomeMetadata(ja);

export default function Page() {
  return <LocalizedHome copy={ja} />;
}
