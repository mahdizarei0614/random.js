import {RandomString} from "./string/string";
import {RandomImage} from "./image/image";
import {RandomNumber} from "./number/number";
import {RandomBoolean} from "./boolean/boolean";
import {RandomDate} from "./date/date";
import {readFileSync} from 'fs';
import {Config} from "./utils/config.model";

let customConfigFile;
try {
    customConfigFile = readFileSync('./random.config.json', { encoding: 'utf8', flag: 'r' });
} catch (e) {}

let config;

if (customConfigFile) {
    config = JSON.parse(customConfigFile) as Config
} else {
    config = JSON.parse(readFileSync('/base/default.config.json', { encoding: 'utf8', flag: 'r' })) as Config;
}

const random = {
    string: new RandomString(config),
    image: new RandomImage(),
    number: new RandomNumber(),
    boolean: new RandomBoolean(),
    date: new RandomDate()
}

export default random;
