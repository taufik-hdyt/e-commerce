import { NextPageContext } from "next";
import nookies from "nookies";

import { IMiddleware } from "@interfaces/IMiddleware";
import { configEnv } from "@libraries/config";

import { getBrand, getProfile } from "./credentials";

export const redirect = (url: string) => ({
  redirect: {
    destination: url,
    permanent: false,
  },
});

export const middleware = (
  ctx: NextPageContext,
  path: string,
  options: any = {},
  isMemberOnlyCanAccess?: boolean
): IMiddleware<any> => {
  const { url } = ctx.req;

  const profile = getProfile(ctx);
  const brand = getBrand(ctx);

  const isNotInLoginPage =
    url !== "/login" &&
    url !== "/create-brand" &&
    url !== "/select-brand" &&
    (!brand || !profile);
  if (isNotInLoginPage) {
    if (!profile) {
      nookies.destroy(ctx, configEnv.keyProfile);
      nookies.destroy(ctx, configEnv.keyToken);
      nookies.destroy(ctx, configEnv.keyBrand);
    }
    return redirect(
      !profile
        ? `/login?returnUrl=${path}`
        : profile?.businesses?.id !== ""
        ? "/select-brand"
        : "/create-brand"
    );
  }

  if (isMemberOnlyCanAccess && profile?.type !== "member" && url !== "/") {
    return redirect("/");
  }

  return {
    props: { ...options },
  };
};

export const middlewareLogin = (
  ctx: NextPageContext,
  options: any = {}
): IMiddleware<any> => {
  const { url } = ctx.req;

  const profile = getProfile(ctx);

  const isLoggedIn =
    (url === "/login" ||
      url === "/berlangganan" ||
      url === "/luopa-password" ||
      url === "/lupa-password/buat-password") &&
    profile;

  if (isLoggedIn) {
    return redirect("/");
  }

  return {
    props: { ...options },
  };
};

export const middlewareAuth = (
  ctx: NextPageContext,
  options: any = {},
  isMemberOnlyCanAccess?: boolean
): IMiddleware<any> => {
  const { url } = ctx.req;

  const profile = getProfile(ctx);

  const isNotInLoginPage = url !== "/login" && !profile;
  if (isNotInLoginPage) {
    nookies.destroy(ctx, configEnv.keyProfile);
    nookies.destroy(ctx, configEnv.keyToken);
    nookies.destroy(ctx, configEnv.keyBrand);
    return redirect("/login");
  }

  if (isMemberOnlyCanAccess && profile?.type !== "member" && url !== "/") {
    return redirect("/");
  }

  return {
    props: { ...options },
  };
};
