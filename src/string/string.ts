import {shuffle} from "../utils/shuffle";
import {Config} from "../utils/config.model";

export class RandomString {
    private readonly randomTextArr;

    constructor(config: Config) {
        this.randomTextArr = config.text.split(' ')
    }

    get(length?: { min?: number; max?: number } | number): string {
        let textArray = this.randomTextArr;
        const minLength = typeof length === 'number' ? length : length?.min ?? 1;
        const maxLength =
            typeof length === 'number' ? length : length?.max ?? textArray.length;
        while (maxLength > textArray.length) {
            textArray = [...textArray, ...this.randomTextArr];
        }
        return shuffle(textArray)
            .slice(
                0,
                Math.ceil(
                    ((maxLength ?? textArray.length) - (minLength ?? 0)) * Math.random() +
                    (minLength ?? 0),
                ),
            )
            .join(' ')
            .trim();
    }
}
