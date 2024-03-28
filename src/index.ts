import {RandomString} from "./string/string";
import {RandomImage} from "./image/image";
import {RandomNumber} from "./number/number";
import {RandomBoolean} from "./boolean/boolean";
import {RandomDate} from "./date/date";
import {Config, PartialConfig} from "./utils/config.model";
import {config as defaultConfig} from "./base/default.config"

export class Random {
    string;
    image;
    number;
    boolean;
    date;

    constructor(userConfig: PartialConfig = {}) {
        const config = {...defaultConfig, ...userConfig} as Config;
        this.string = new RandomString(config.string);
        this.image = new RandomImage();
        this.number = new RandomNumber(config.number);
        this.boolean = new RandomBoolean(config.boolean);
        this.date = new RandomDate(config.date);
    }
}

export default Random;
