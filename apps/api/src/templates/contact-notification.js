/**
 * Internal notification email sent to the TransMedex team.
 */
export function contactNotificationHtml({ name, email, phone, service, date, time, message }) {
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
        <td style="background:#0f172a;padding:32px 32px;border-bottom:1px solid #1e293b;">
          <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;letter-spacing:-0.3px;">New Contact Request</h1>
        </td>
      </tr>
      <!-- Body -->
      <tr>
        <td style="padding:40px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#334155;">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-weight:600;width:140px;color:#64748b;">Name</td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-weight:500;color:#0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-weight:600;color:#64748b;">Email</td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none;font-weight:500;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-weight:600;color:#64748b;">Phone</td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-weight:500;color:#0f172a;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-weight:600;color:#64748b;">Service</td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-weight:500;color:#0f172a;">${service || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-weight:600;color:#64748b;">Date</td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-weight:500;color:#0f172a;">${date || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-weight:600;color:#64748b;">Time</td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;font-weight:500;color:#0f172a;">${time || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding:16px 0 8px;font-weight:600;color:#64748b;" valign="top">Message</td>
              <td style="padding:16px 0 8px;line-height:1.6;color:#334155;">${message ? message.replace(/\n/g, '<br>') : '<em>No message provided.</em>'}</td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Footer -->
      <tr>
        <td style="background:#f8fafc;padding:24px 32px;text-align:center;border-top:1px solid #e2e8f0;">
          <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.5;">
            This internal notification was generated automatically by WebCore360.
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}
