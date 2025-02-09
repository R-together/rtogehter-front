import { userHandlers } from "./handlers/userHandlers";
import { categoryHandlers } from "./handlers/categoryHandlers";
import { jobHandlers } from "./handlers/jobHandlers";
import { applicationHandlers } from "./handlers/applicationHandlers";
import { mentoringSessionHandlers } from "./handlers/mentoringSessionHandlers";
import { timeSlotHandlers } from "./handlers/timeSlotHandlers";
import { waitListHandlers } from "./handlers/waitListHandlers";

export const handlers = [
  ...userHandlers,
  ...categoryHandlers,
  ...jobHandlers,
  ...applicationHandlers,
  ...mentoringSessionHandlers,
  ...timeSlotHandlers,
  ...waitListHandlers,
];
