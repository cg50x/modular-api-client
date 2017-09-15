// Testing partially adding services
import { client } from '../base';

console.log('PARTIAL ADD SERVICES Test');
console.log('--------------------------------');
console.log('When client is initially imported from base\n');
console.log('Client only has core service');
console.log('client[\'core\'] !== undefined', client['core'] !== undefined);
console.log('client[\'ads\']  === undefined', client['ads'] === undefined);
console.log('client[\'user\'] === undefined', client['user'] === undefined);
