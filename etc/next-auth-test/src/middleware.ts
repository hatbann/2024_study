/** @format */

export { default } from "next-auth/middleware";

//  로그인 한 상태만 볼 수 있는 페이지
export const config = {
  matcher: ["/userposts/:path*"],
};
