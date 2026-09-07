// A CommonJS wrapper to start the ES module backend
// This is required for Phusion Passenger on Hostinger which uses require() internally to load the entry file.
import('./apps/api/src/main.js').catch(err => {
    console.error('Failed to load backend:', err);
    process.exit(1);
});
