import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();

export const config = {
  // https://clerk.com/docs/nextjs/read-session-and-user-data
  matcher: ['/create', '/brands', '/content'],
  // matcher: ["/((?!.*\\..*|_next).*)"],
};
