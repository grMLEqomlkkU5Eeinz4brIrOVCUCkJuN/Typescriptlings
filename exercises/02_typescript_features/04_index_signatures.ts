// The implicit index signature gotcha
//
// A type alias is sealed once written, so TS treats it as compatible with
// Record<string, unknown>. An interface could be reopened (merged) from another
// file, so it gets NO implicit index signature and is rejected.
//
// TODO: make `sendToApi(payload)` compile. Pick one of the fixes from the notes:
//       turn Payload into a `type`, add an explicit index signature, or spread at the call site.
import { assertEqual } from "../../helpers";

// I AM NOT DONE

function sendToApi(body: Record<string, unknown>): string {
  return JSON.stringify(body);
}

interface Payload {
  userId: number;
}

const payload: Payload = { userId: 7 };
assertEqual(sendToApi(payload), '{"userId":7}', "sendToApi");
