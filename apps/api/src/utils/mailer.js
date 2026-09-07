import nodemailer from 'nodemailer';
import logger from './logger.js';

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT) || 465,
	secure: Number(process.env.SMTP_PORT) === 465,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

/**
 * Verify SMTP connection on startup (non-blocking).
 */
export async function verifyMailer() {
	try {
		await transporter.verify();
		logger.info('SMTP connection verified successfully');
	} catch (err) {
		logger.error('SMTP connection failed — emails will not be sent:', err.message);
	}
}

export default transporter;
