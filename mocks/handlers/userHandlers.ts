import { http, HttpResponse } from "msw";

export const userHandlers = [
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
];
