import { f as fail, r as redirect } from "../../../chunks/index.js";
const actions = {
  login: async ({ request, cookies, url, locals }) => {
    const form = await request.formData();
    const username = form.get("username");
    const password = form.get("password");
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    if (!username) {
      return fail(400, {
        usernameMissing: true
      });
    }
    if (!password) {
      return fail(400, {
        passwordMissing: true,
        username
      });
    }
    cookies.set("token", "token_value", {
      path: "/"
    });
    locals.user = { name: "John", id: 1 };
    throw redirect(303, url.searchParams.get("redirectTo") || "/");
  },
  logout: ({ cookies, url, locals }) => {
    cookies.delete("token", { path: "/" });
    locals.user = void 0;
    throw redirect(302, url.searchParams.get("redirectTo") || "/");
  }
};
export {
  actions
};
