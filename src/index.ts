import {RandomString} from "./string/string";
import {RandomImage} from "./image/image";
import {RandomNumber} from "./number/number";
import {RandomBoolean} from "./boolean/boolean";
import {RandomDate} from "./date/date";
import {BooleanConfig, DateConfig, NumberConfig, PartialConfig, StringConfig} from "./utils/config.model";
import {config as defaultConfig} from "./base/default.config"

export class Random {
    private stringClass;
    private imageClass;
    private numberClass;
    private booleanClass;
    private dateClass;

    constructor(userConfig: PartialConfig = {}) {
        this.stringClass = new RandomString({...defaultConfig.string, ...userConfig.string});
        this.imageClass = new RandomImage();
        this.numberClass = new RandomNumber({...defaultConfig.number, ...userConfig.number});
        this.booleanClass = new RandomBoolean({...defaultConfig.boolean, ...userConfig.boolean});
        this.dateClass = new RandomDate({...defaultConfig.date, ...userConfig.date});
    }

    string(config?: Partial<StringConfig>) {
        return this.stringClass.get(config);
    }
    image(config?: { width: number; height: number } | number) {
        return this.imageClass.get(config);
    }
    number(config?: Partial<NumberConfig>) {
        return this.numberClass.get(config);
    }
    boolean(config?: Partial<BooleanConfig>) {
        return this.booleanClass.get(config);
    }
    date(config?: Partial<DateConfig>) {
        return this.dateClass.get(config);
    }
}

export default Random;
