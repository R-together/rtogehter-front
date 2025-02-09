import { http, HttpResponse } from "msw";

export const mentoringSessionHandlers = [
  http.get("/mentoring-sessions", () => {
    return HttpResponse.json([
      {
        session_id: 1,
        mentor_id: 1,
        main_category_id: 1,
        sub_category_id: 2,
        title: "Introduction to Python",
        description: "Learn the basics of Python programming.",
        level: "Beginner",
        session_duration: 60,
        session_image_url: "http://example.com/session-img",
        created_at: "2023-01-01T12:00:00Z",
      },
      {
        session_id: 2,
        mentor_id: 2,
        main_category_id: 3,
        sub_category_id: 4,
        title: "Advanced JavaScript",
        description: "Deep dive into JavaScript for experienced developers.",
        level: "Advanced",
        session_duration: 90,
        session_image_url: "http://example.com/js-session-img",
        created_at: "2023-01-02T12:00:00Z",
      },
    ]);
  }),
  http.get("/mentoring-session/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({
      session_id: id,
      mentor_id: 1,
      main_category_id: 1,
      sub_category_id: 2,
      title: "Introduction to Python",
      description: "Learn the basics of Python programming.",
      level: "Beginner",
      session_duration: 60,
      session_image_url: "http://example.com/session-img",
      created_at: "2023-01-01T12:00:00Z",
    });
  }),
  http.post("/mentoring-sessions", () => {
    return HttpResponse.json({
      session_id: 2,
      created_at: "2023-01-01T12:00:00Z",
    });
  }),
  http.put("/mentoring-sessions/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({
      session_id: id,
      updated_at: "2023-01-02T12:00:00Z",
    });
  }),
  http.delete("/mentoring-session/:id", () => {
    return HttpResponse.json({
      message: "Mentoring session deleted successfully.",
    });
  }),
];
