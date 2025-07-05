import siteConfig from "@/config/site.config";
import { omitBy, isNull, isUndefined } from "lodash-es";

export async function apiCall(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  data: Record<string, any> = {},
  customUrl: boolean = false,
  heads: Record<string, string> = {},
  formData: boolean = false
): Promise<any> {
  const headers: HeadersInit = {
    Accept: "application/json",
    ...heads,
  };

  const time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const apiDataMain: Record<string, any> = {
    ...data,
    time_zone,
  };

  const apiData: Record<string, any> = !formData
    ? omitBy(apiDataMain, (v) => isUndefined(v) || isNull(v))
    : apiDataMain;

  let fullUrl = customUrl ? url : `${siteConfig.baseUrl}${url}`;
  let body: BodyInit | undefined = undefined;

  if (method === "GET") {
    const queryParams = new URLSearchParams(
      Object.entries(apiData).reduce((acc, [key, value]) => {
        if (typeof value === "string") {
          acc[key] = value;
        } else if (value != null) {
          acc[key] = JSON.stringify(value);
        }
        return acc;
      }, {} as Record<string, string>)
    ).toString();
    fullUrl += queryParams ? `?${queryParams}` : "";
  } else {
    if (formData) {
      const form = new FormData();
      for (const key in apiData) {
        form.append(key, apiData[key]);
      }
      body = form;
    } else {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(apiData);
    }
  }

  try {
    const response = await fetch(fullUrl, {
      method,
      headers,
      body,
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (response.status === 402) {
        // logoutWeb();
        return;
      }
      return {
        status: errorData?.status || "error",
        message: errorData?.message || "An error occurred",
      };
    }

    return await response.json();
  } catch (error: any) {
    console.log("Unexpected error:", error);
    return null;
  }
}
