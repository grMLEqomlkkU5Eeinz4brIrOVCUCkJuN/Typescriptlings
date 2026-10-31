import { assertEqual } from "../../helpers";

interface Settings { theme: string }
interface Settings { language: string }

const s: Settings = { theme: "dark", language: "en" };
assertEqual(s, { theme: "dark", language: "en" }, "settings");
