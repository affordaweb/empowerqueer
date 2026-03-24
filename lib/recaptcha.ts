declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (cb: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

const SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6LeNET0sAAAAAPEEe6JdAhHy_gbbQ-_yM_ps0PD1";

export { SITE_KEY };

export function getRecaptchaToken(action: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.grecaptcha?.enterprise) {
      return reject(new Error("reCAPTCHA not loaded"));
    }
    window.grecaptcha.enterprise.ready(() => {
      window.grecaptcha.enterprise
        .execute(SITE_KEY, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}
