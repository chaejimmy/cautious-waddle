export default function handler(req, res) {
	// Use debugger to check runtime values
	const env = process.env;
	res.status(200).json({name: 'John Doe'});
}
