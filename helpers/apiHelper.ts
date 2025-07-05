import siteConfig from "@/config/site.config";
import { omitBy, isNull, isUndefined } from "lodash-es";

export async function apiCall(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  data: Record<string, any> = {},
  customUrl: boolean = false,
  heads: Record<string, string> = {},
  formData: boolean = false,
  signal?: AbortSignal,
  onProgress?: (progress: number) => void
): Promise<any> {
  const headers: HeadersInit = {
    Accept: "application/json",
    ...heads,
  };

  const time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const apiDataMain = { ...data, time_zone };

  const apiData = !formData
    ? omitBy(apiDataMain, (v) => isUndefined(v) || isNull(v))
    : apiDataMain;

  let fullUrl = customUrl ? url : `${siteConfig.baseUrl}${url}`;
  let body: BodyInit | undefined = undefined;

  if (method === "GET") {
    const queryParams = new URLSearchParams(
      apiData as Record<string, string>
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
      signal,
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

    // Handle streaming response with progress
    if (onProgress && response.body) {
      const reader = response.body.getReader();
      const contentLength = +(response.headers.get("Content-Length") || 0);
      let receivedLength = 0;
      let chunks: Uint8Array[] = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) {
          chunks.push(value);
          receivedLength += value.length;
          const progress = Math.round((receivedLength * 100) / contentLength);
          onProgress(progress);
        }
      }

      const fullBlob = new Blob(chunks);
      const text = await fullBlob.text();
      return JSON.parse(text);
    }

    return await response.json();
  } catch (error: any) {
    console.log("Unexpected error:", error);
    return null;
  }
}
