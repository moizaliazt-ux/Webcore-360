/**
 * Contact-form server-side validation & sanitisation.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[\d\s()+\-.,]{7,20}$/;
const LINK_RE = /https?:\/\/|www\./i;

/** Strip HTML tags */
function sanitize(str) {
	if (typeof str !== 'string') return '';
	return str.replace(/<[^>]*>/g, '').trim();
}

/**
 * Returns an array of error messages.  Empty array = valid.
 */
export function validateContactForm(body) {
	const errors = [];

	const name = sanitize(body.name);
	const email = sanitize(body.email);
	const phone = sanitize(body.phone);
	const service = sanitize(body.service);
	const date = sanitize(body.date);
	const time = sanitize(body.time);
	const message = sanitize(body.message);

	// Required fields
	if (!name || name.length < 2 || name.length > 50) {
		errors.push('Name must be 2–50 characters.');
	}
	if (!email || !EMAIL_RE.test(email)) {
		errors.push('A valid email address is required.');
	}
	if (!phone && !body.message) {
		// Just ensure they provide at least phone or message so it's not totally empty, but let's just make phone optional actually
	}

	if (service && service.length < 2) {
		errors.push('A valid service is required.');
	}
	// date and time are optional for general contact form
	
	if (message && message.length > 2000) {
		errors.push('Message must not exceed 2000 characters.');
	}

	// Anti-spam: reject messages full of links
	if (message && LINK_RE.test(message)) {
		errors.push('Links are not allowed in the message.');
	}

	// Honeypot — if the hidden field was filled, it's a bot
	if (body._hp_website && body._hp_website.length > 0) {
		errors.push('Spam detected.');
	}

	return {
		errors,
		sanitized: { name, email, phone, service, date, time, message },
	};
}
