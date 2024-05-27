import {Node} from '@resolverworks/enson';
import {serve} from '@resolverworks/ezccip';
import {readFileSync} from 'node:fs';

let root = Node.root();
root.import(JSON.parse(readFileSync(new URL('./db.json', import.meta.url))));
root.print();

await serve(name => root.find(name)?.record, {
	log: true,
	//port: 8000,
	protocol: 'ens',
	signingKey: '0xbd1e630bd00f12f0810083ea3bd2be936ead3b2fa84d1bd6690c77da043e9e02'
});
