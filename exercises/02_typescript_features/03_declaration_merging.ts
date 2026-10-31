// Declaration merging
//
// Declaring the same interface twice merges both declarations into one.
// Doing that with `type` is a "Duplicate identifier" error.
// This is how libraries let you augment types you don't own (Window, Express Request...).
//
// TODO: the code below declares `Settings` twice with `type`. Make it compile
//       by turning both into interfaces so they merge.
import { assertEqual } from "../../helpers";

// I AM NOT DONE

type Settings = { theme: string };
type Settings = { language: string };

const s: Settings = { theme: "dark", language: "en" };
assertEqual(s, { theme: "dark", language: "en" }, "settings");
