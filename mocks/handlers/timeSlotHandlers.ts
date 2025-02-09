import { http, HttpResponse } from "msw";

export const timeSlotHandlers = [
  http.get("/time-slots", () => {
    return HttpResponse.json([
      {
        slot_id: 1,
        session_id: 1,
        date: "2023-01-01",
        start_time: "2023-01-01T14:00:00Z",
        end_time: "2023-01-01T15:00:00Z",
        is_booked: false,
      },
      {
        slot_id: 2,
        session_id: 1,
        date: "2023-01-02",
        start_time: "2023-01-02T14:00:00Z",
        end_time: "2023-01-02T15:00:00Z",
        is_booked: true,
      },
    ]);
  }),
  http.get("/time-slots/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({
      slot_id: id,
      session_id: 1,
      date: "2023-01-01",
      start_time: "2023-01-01T14:00:00Z",
      end_time: "2023-01-01T15:00:00Z",
      is_booked: false,
    });
  }),
  http.post("/time-slots", () => {
    return HttpResponse.json({
      slot_id: 1,
      created_at: "2023-01-01T12:00:00Z",
    });
  }),
  http.put("/time-slots/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({
      slot_id: id,
      updated_at: "2023-01-02T12:00:00Z",
    });
  }),
  http.delete("/time-slots/:id", () => {
    return HttpResponse.json({ message: "Time slot deleted successfully." });
  }),
];
