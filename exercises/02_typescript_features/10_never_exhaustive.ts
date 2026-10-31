// never and exhaustiveness checks
//
// `never` is the type of values that can't occur: functions that always throw,
// infinite loops, and the leftover case after every union member is handled.
// Assigning to `never` in a `default:` branch makes the compiler tell you
// when a new union member isn't handled yet.
//
// TODO: 1. give `fail` the return type `never`
//       2. "error" was added to Status but `message` doesn't handle it. Add the case.
import { assertEqual } from "../../helpers";

// I AM NOT DONE

type Status = "loading" | "success" | "error";

function fail(msg: string) {
  throw new Error(msg);
}

function message(status: Status): string {
  switch (status) {
    case "loading":
      return "Loading...";
    case "success":
      return "Done!";
    default: {
      const unreachable: never = status;
      return fail(`unhandled status ${unreachable}`);
    }
  }
}

type FailReturns = ReturnType<typeof fail>;
const check: FailReturns extends never ? true : false = true;

assertEqual(message("loading"), "Loading...", "loading");
assertEqual(message("error"), "Something went wrong", "error");
