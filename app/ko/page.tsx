import { ko } from "../i18n/ko";
import { LocalizedHome, localizedHomeMetadata } from "../localized-home";

export const metadata = localizedHomeMetadata(ko);

export default function Page() {
  return <LocalizedHome copy={ko} />;
}
