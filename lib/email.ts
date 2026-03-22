import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || "placeholder");
}

const FROM = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "aivan.c.alvarez@gmail.com";
const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://empowerqueer.vercel.app";

export async function sendApprovalRequestEmail({
  userId,
  name,
  email,
  photoUrl,
  approveToken,
  rejectToken,
}: {
  userId: string;
  name: string;
  email: string;
  photoUrl?: string | null;
  approveToken: string;
  rejectToken: string;
}) {
  const approveUrl = `${APP_URL}/api/admin/approve?token=${approveToken}`;
  const rejectUrl = `${APP_URL}/api/admin/reject?token=${rejectToken}`;

  await getResend().emails.send({
    from: FROM,
    to: ADMIN_EMAIL,
    subject: `New Registration Request — ${name}`,
    html: `
<!DOCTYPE html><html><body style="margin:0;padding:0;background:#0F0A1E;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0F0A1E;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#1A1035;border-radius:16px;overflow:hidden;border:1px solid rgba(124,58,237,0.3);">
<tr><td style="background:linear-gradient(135deg,#7C3AED,#EC4899);padding:32px;text-align:center;">
<h1 style="color:#fff;margin:0;font-size:24px;">New Registration Request</h1>
<p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px;">Empower Queer Hub Admin Dashboard</p>
</td></tr>
<tr><td style="padding:32px;">
<p style="color:#C4B5FD;font-size:16px;">A new user has requested dashboard access:</p>
<table width="100%" cellpadding="12" style="background:#0F0A1E;border-radius:12px;border:1px solid rgba(124,58,237,0.2);margin-bottom:24px;">
${photoUrl ? `<tr><td colspan="2" style="text-align:center;"><img src="${photoUrl}" width="80" height="80" style="border-radius:50%;border:3px solid #7C3AED;object-fit:cover;" /></td></tr>` : ""}
<tr><td style="color:#A78BFA;font-size:13px;font-weight:600;width:140px;">Full Name</td><td style="color:#fff;">${name}</td></tr>
<tr><td style="color:#A78BFA;font-size:13px;font-weight:600;">Email</td><td style="color:#fff;">${email}</td></tr>
<tr><td style="color:#A78BFA;font-size:13px;font-weight:600;">User ID</td><td style="color:#6B7280;font-size:13px;">${userId}</td></tr>
<tr><td style="color:#A78BFA;font-size:13px;font-weight:600;">Requested</td><td style="color:#fff;">${new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" })}</td></tr>
</table>
<table width="100%" cellpadding="0" cellspacing="0"><tr>
<td style="padding-right:8px;" width="50%"><a href="${approveUrl}" style="display:block;text-align:center;background:linear-gradient(135deg,#059669,#10B981);color:#fff;padding:16px;border-radius:12px;text-decoration:none;font-weight:700;font-size:15px;">✓ Approve Access</a></td>
<td style="padding-left:8px;" width="50%"><a href="${rejectUrl}" style="display:block;text-align:center;background:linear-gradient(135deg,#DC2626,#EF4444);color:#fff;padding:16px;border-radius:12px;text-decoration:none;font-weight:700;font-size:15px;">✗ Reject Request</a></td>
</tr></table>
<p style="color:#6B7280;font-size:12px;margin:24px 0 0;text-align:center;">These links expire in 48 hours.</p>
</td></tr>
<tr><td style="padding:20px 32px;border-top:1px solid rgba(124,58,237,0.2);text-align:center;">
<p style="color:#6B7280;font-size:12px;margin:0;">Empower Queer Hub · Batangas, Philippines · <a href="${APP_URL}" style="color:#7C3AED;">empowerqueerhub.com</a></p>
</td></tr>
</table></td></tr></table>
</body></html>`,
  });
}

export async function sendWelcomeEmail({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const loginUrl = `${APP_URL}/login`;
  await getResend().emails.send({
    from: FROM,
    to: email,
    subject: "You've been approved! — Empower Queer Hub",
    html: `
<!DOCTYPE html><html><body style="margin:0;padding:0;background:#0F0A1E;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0F0A1E;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#1A1035;border-radius:16px;overflow:hidden;border:1px solid rgba(124,58,237,0.3);">
<tr><td style="background:linear-gradient(135deg,#7C3AED,#EC4899);padding:32px;text-align:center;">
<h1 style="color:#fff;margin:0;font-size:28px;">Welcome to the Team! 🎉</h1>
<p style="color:rgba(255,255,255,0.8);margin:8px 0 0;">You Are Seen. You Are Valid. You Are Home.</p>
</td></tr>
<tr><td style="padding:32px;">
<p style="color:#C4B5FD;font-size:16px;">Hi <strong style="color:#fff;">${name}</strong>,</p>
<p style="color:#C4B5FD;font-size:16px;line-height:1.6;">Your account has been approved. You now have full access to the Empower Queer Hub dashboard.</p>
<table width="100%" cellpadding="16" style="background:#0F0A1E;border-radius:12px;border:1px solid rgba(124,58,237,0.2);margin:24px 0;">
<tr><td style="color:#A78BFA;font-size:13px;font-weight:600;width:130px;">Login URL</td><td><a href="${loginUrl}" style="color:#7C3AED;">${loginUrl}</a></td></tr>
<tr><td style="color:#A78BFA;font-size:13px;font-weight:600;">Username</td><td style="color:#fff;">${email}</td></tr>
<tr><td style="color:#A78BFA;font-size:13px;font-weight:600;">Password</td><td style="color:#fff;">●●●●●●●●●● <span style="color:#6B7280;font-size:12px;">(the one you set during registration)</span></td></tr>
</table>
<a href="${loginUrl}" style="display:block;text-align:center;background:linear-gradient(135deg,#7C3AED,#EC4899);color:#fff;padding:16px;border-radius:12px;text-decoration:none;font-weight:700;font-size:16px;">Access the Dashboard →</a>
</td></tr>
<tr><td style="padding:20px 32px;border-top:1px solid rgba(124,58,237,0.2);text-align:center;">
<p style="color:#6B7280;font-size:12px;margin:0;">Empower Queer Hub · Batangas, Philippines</p>
</td></tr>
</table></td></tr></table>
</body></html>`,
  });
}

export async function sendRejectionEmail({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  await getResend().emails.send({
    from: FROM,
    to: email,
    subject: "Update on your registration — Empower Queer Hub",
    html: `
<!DOCTYPE html><html><body style="margin:0;padding:0;background:#0F0A1E;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0F0A1E;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#1A1035;border-radius:16px;overflow:hidden;border:1px solid rgba(124,58,237,0.3);">
<tr><td style="background:linear-gradient(135deg,#7C3AED,#EC4899);padding:32px;text-align:center;">
<h1 style="color:#fff;margin:0;font-size:24px;">Registration Update</h1>
</td></tr>
<tr><td style="padding:32px;">
<p style="color:#C4B5FD;font-size:16px;">Hi <strong style="color:#fff;">${name}</strong>,</p>
<p style="color:#C4B5FD;font-size:16px;line-height:1.6;">Thank you for your interest in joining the Empower Queer Hub team. After reviewing your request, we are unable to approve your account at this time.</p>
<p style="color:#C4B5FD;font-size:16px;line-height:1.6;">If you believe this was a mistake, please reach out at <a href="mailto:${ADMIN_EMAIL}" style="color:#7C3AED;">${ADMIN_EMAIL}</a>.</p>
<p style="color:#C4B5FD;">With care,<br/><strong style="color:#fff;">The Empower Queer Hub Team</strong></p>
</td></tr>
<tr><td style="padding:20px 32px;border-top:1px solid rgba(124,58,237,0.2);text-align:center;">
<p style="color:#6B7280;font-size:12px;margin:0;">Empower Queer Hub · Batangas, Philippines</p>
</td></tr>
</table></td></tr></table>
</body></html>`,
  });
}
