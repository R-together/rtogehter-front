import { http, HttpResponse } from "msw";

export const applicationHandlers = [
  http.get("/applications", () => {
    return HttpResponse.json([
      {
        application_id: 1,
        session_id: 1,
        mentee_id: 2,
        slot_id: 1,
        application_reason: "Interested in learning Python basics.",
        created_at: "2023-01-01T12:00:00Z",
      },
      {
        application_id: 2,
        session_id: 2,
        mentee_id: 3,
        slot_id: 2,
        application_reason: "Want to improve JavaScript skills.",
        created_at: "2023-01-02T12:00:00Z",
      },
    ]);
  }),
  http.get("/applications/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({
      application_id: id,
      session_id: 1,
      mentee_id: 2,
      slot_id: 1,
      application_reason: "Interested in learning Python basics.",
      created_at: "2023-01-01T12:00:00Z",
    });
  }),
  http.post("/applications", () => {
    return HttpResponse.json({
      application_id: 1,
      created_at: "2023-01-01T12:00:00Z",
    });
  }),
  http.put("/applications/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({
      application_id: id,
      updated_at: "2023-01-02T12:00:00Z",
    });
  }),
  http.delete("/applications/:id", () => {
    return HttpResponse.json({ message: "Application deleted successfully." });
  }),
];
