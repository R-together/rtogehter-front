import { http, HttpResponse } from "msw";

export const waitListHandlers = [
  http.get("/waitlists", () => {
    return HttpResponse.json([
      { waitlist_id: 1, application_id: 1, created_at: "2023-01-01T12:00:00Z" },
      { waitlist_id: 2, application_id: 2, created_at: "2023-01-02T12:00:00Z" },
    ]);
  }),
  http.get("/waitlists/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({
      waitlist_id: id,
      application_id: 1,
      created_at: "2023-01-01T12:00:00Z",
    });
  }),
  http.post("/waitlists", () => {
    return HttpResponse.json({
      waitlist_id: 1,
      created_at: "2023-01-01T12:00:00Z",
    });
  }),
  http.put("/waitlists/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({ waitlist_id: id });
  }),
  http.delete("/waitlists/:id", () => {
    return HttpResponse.json({
      message: "Waitlist entry deleted successfully.",
    });
  }),
];
