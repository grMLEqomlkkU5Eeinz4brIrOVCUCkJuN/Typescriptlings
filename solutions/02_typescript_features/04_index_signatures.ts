import { assertEqual } from "../../helpers";

function sendToApi(body: Record<string, unknown>): string {
  return JSON.stringify(body);
}

type Payload = {
  userId: number;
};

const payload: Payload = { userId: 7 };
assertEqual(sendToApi(payload), '{"userId":7}', "sendToApi");
