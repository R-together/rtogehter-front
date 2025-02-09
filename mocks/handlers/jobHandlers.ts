import { http, HttpResponse } from "msw";

export const jobHandlers = [
  http.get("/jobs", () => {
    return HttpResponse.json([
      { job_id: 1, name: "Engineer", parent_id: null },
      { job_id: 2, name: "Applications Engineer", parent_id: 1 },
    ]);
  }),
  http.get("/jobs/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({ job_id: id, name: "Engineer", parent_id: null });
  }),
  http.post("/jobs", () => {
    return HttpResponse.json({ job_id: 3 });
  }),
  http.put("/jobs/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({ job_id: id });
  }),
  http.delete("jobs/:id", () => {
    return HttpResponse.json({ message: "Job deleted successfully." });
  }),
];
