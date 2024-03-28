import {shuffle} from "../utils/shuffle";
import {StringConfig} from "../utils/config.model";

export class RandomString {
    private readonly randomTextArr;
    text: string;
    minLength: number;
    maxLength: number;
    shuffle: boolean;

    constructor(config: StringConfig) {
        this.text = config.text;
        this.minLength = config.minLength;
        this.maxLength = config.maxLength;
        this.shuffle = config.shuffle;
        this.randomTextArr = this.text.split(' ');
    }

    get(config?: Partial<StringConfig> & Partial<{fixedLength: number}>): string {
        const minLength = config?.fixedLength ?? config?.minLength ?? this.minLength;
        const maxLength = config?.fixedLength ?? config?.maxLength ?? this.maxLength;
        const shouldShuffle = config?.shuffle ?? this.shuffle;
        let textArray = config?.text ? config.text.split(' ') : this.randomTextArr;
        while (maxLength > textArray.length) {
            textArray = [...textArray, ...this.randomTextArr];
        }
        return (shouldShuffle ? shuffle(textArray) : textArray)
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
