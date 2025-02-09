import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/users", () => {
    return HttpResponse.json({
      user_id: 1,
      email: "taro.rakuten@rakuten.com",
      name: "Taro Rakuten",
      phone: "+1234567890",
      bio: "Software engineer with 5 years of experience.",
      profile_image_url: "http://example.com/img",
      job: 2,
      interest: 2,
      created_at: "2023-01-01T12:00:00Z",
      updated_at: "2023-01-02T12:00:00Z",
    });
  }),
  http.get("/users/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({
      user_id: id,
      email: "taro.rakuten@rakuten.com",
      name: "Taro Rakuten",
      phone: "+1234567890",
      bio: "Software engineer with 5 years of experience.",
      profile_image_url: "http://example.com/img",
      job: 2,
      interest: 2,
      created_at: "2023-01-01T12:00:00Z",
      updated_at: "2023-01-02T12:00:00Z",
    });
  }),
  http.post("/users", () => {
    return HttpResponse.json({
      user_id: 1,
      created_at: "2023-01-01T12:00:00Z",
      updated_at: "2023-01-01T12:00:00Z",
    });
  }),
  http.put("/users/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({
      user_id: id,
      updated_at: "2023-01-02T12:00:00Z",
    });
  }),
  http.delete("/users/:id", () => {
    return HttpResponse.json({ message: "User deleted successfully." });
  }),
  http.get("/categories", () => {
    return HttpResponse.json([
      { category_id: 1, name: "Technology", parent_id: null },
      { category_id: 2, name: "Programming", parent_id: 1 },
    ]);
  }),
  http.get("/categories/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({
      category_id: id,
      name: "Technology",
      parent_id: null,
    });
  }),
  http.post("/categories", () => {
    return HttpResponse.json({ category_id: 1 });
  }),
  http.put("/categories/:id", ({ params }) => {
    const { id } = params;

    return HttpResponse.json({ category_id: id });
  }),
  http.delete("/categories/:id", () => {
    return HttpResponse.json({ message: "Category deleted successfully." });
  }),
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
