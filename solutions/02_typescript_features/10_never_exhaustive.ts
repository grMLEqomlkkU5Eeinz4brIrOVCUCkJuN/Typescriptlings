import { assertEqual } from "../../helpers";

type Status = "loading" | "success" | "error";

function fail(msg: string): never {
  throw new Error(msg);
}

function message(status: Status): string {
  switch (status) {
    case "loading":
      return "Loading...";
    case "success":
      return "Done!";
    case "error":
      return "Something went wrong";
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
