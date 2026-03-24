export async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret =
    process.env.RECAPTCHA_SECRET_KEY ||
    "6LeNET0sAAAAAA0niv9D6nIu4fy-8ChGOEfLSkHW";

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }).toString(),
  });

  const data = await res.json();
  return data.success === true && (data.score ?? 0) >= 0.5;
}
