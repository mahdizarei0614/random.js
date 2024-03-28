import {RandomString} from "./string/string";
import {RandomImage} from "./image/image";
import {RandomNumber} from "./number/number";
import {RandomBoolean} from "./boolean/boolean";
import {RandomDate} from "./date/date";
import {PartialConfig} from "./utils/config.model";
import {config as defaultConfig} from "./base/default.config"

export class Random {
    string;
    image;
    number;
    boolean;
    date;

    constructor(userConfig: PartialConfig = {}) {
        this.string = new RandomString({...defaultConfig.string, ...userConfig.string});
        this.image = new RandomImage();
        this.number = new RandomNumber({...defaultConfig.number, ...userConfig.number});
        this.boolean = new RandomBoolean({...defaultConfig.boolean, ...userConfig.boolean});
        this.date = new RandomDate({...defaultConfig.date, ...userConfig.date});
    }
}

export default Random;
