// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');

export default async function handler(req, res) {
	console.log(req['query']);
	const config = {
		client: {
		  id: 'u-s4t2ud-0cbc549c7a6a027ecae10d83f05c00faff575b7f725921ea8d7978aca6b4be32',
		  secret: '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'
		},
		auth: {
		  tokenHost: 'https://api.intra.42.fr/oauth/token'
		}
	};
	const client = new AuthorizationCode(config);
	const code = req['query']['code'];
	const tokenParams = {
		code: code,
		redirect_uri: 'http://localhost:3000/api/callback',
		scope: 'afjaksfjklasfjakljsfkljasjfljajfq90ru290qoamlsfmafj903qmkasf',
	};
	const accessToken = await client.getToken(tokenParams);
	const access_Token = accessToken['token']['access_token'];
	console.log(access_Token);
	res.status(200).json({ name: 'John Doe' })
  }
  