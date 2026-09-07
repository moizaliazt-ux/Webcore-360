/**
 * Auto-reply email sent to the customer / prospect.
 */
export function contactAutoReplyHtml({ name }) {
	return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#f9fafb;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:40px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;overflow:hidden;">
      <!-- Header -->
      <tr>
        <td style="background:#0f172a;padding:40px 32px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:600;letter-spacing:-0.5px;">WebCore360</h1>
          <p style="margin:8px 0 0;color:#94a3b8;font-size:14px;">Web Development & Digital Marketing</p>
        </td>
      </tr>
      <!-- Body -->
      <tr>
        <td style="padding:40px 32px;">
          <h2 style="margin:0 0 20px;font-size:20px;color:#0f172a;font-weight:600;letter-spacing:-0.3px;">Thank you, ${name}.</h2>
          <p style="margin:0 0 24px;font-size:15px;color:#334155;line-height:1.6;">
            We have received your request to schedule a call. One of our specialists is reviewing your details and will reach out shortly to confirm the appointment.
          </p>
          <p style="margin:0;font-size:15px;color:#334155;line-height:1.6;">
            Best regards,<br>
            <strong style="color:#0f172a;font-weight:600;">The WebCore360 Team</strong>
          </p>
        </td>
      </tr>
      <!-- Footer -->
      <tr>
        <td style="background:#f8fafc;padding:24px 32px;text-align:center;border-top:1px solid #e2e8f0;">
          <p style="margin:0 0 8px;font-size:12px;color:#64748b;font-weight:500;">WebCore360</p>
          <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.5;">
            This is an automated response. Please do not reply directly to this email.<br>
            &copy; ${new Date().getFullYear()} WebCore360. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}
