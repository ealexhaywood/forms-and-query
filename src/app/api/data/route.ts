import { NextRequest, NextResponse } from "next/server";

const response = {
  firstName: "Joe",
  lastName: "Flacco",
  email: "joeflacco@elite.com",
  description: "11 TDs 0 INTs",
};

export async function GET(request: NextRequest) {
  let shouldReject = false;

  const params = request.url.split("?")[1];
  if (params) {
    const searchParams = new URLSearchParams(params);
    if (searchParams.get("reject") === "true") {
      shouldReject = true;
    }
  }

  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (shouldReject) {
        return reject(NextResponse.error());
      }

      return resolve(NextResponse.json(response));
    }, Math.random() * 5000)
  );
}
