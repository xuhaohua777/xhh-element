import { makeInstaller } from "@xhh-element/utils";
import components from "./components";
import "@xhh-element/theme/index.css"

const installer = makeInstaller(components);

export * from "@xhh-element/components";
export default installer;