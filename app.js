import {Node} from '@resolverworks/enson';
import {serve} from '@resolverworks/ezccip';
import {readFileSync} from 'node:fs';

let root = Node.root();
root.import(JSON.parse(readFileSync(new URL('./db.json', import.meta.url))));
root.print();

await serve(name => root.find(name)?.record, {
	log: true,
	port: parseInt(process.env.PORT) | 0,
	protocol: process.env.PROTOCOL,
	signingKey: process.env.PRIVATE_KEY
});
