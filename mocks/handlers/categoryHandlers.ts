import { http, HttpResponse } from "msw";

export const categoryHandlers = [
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
];
