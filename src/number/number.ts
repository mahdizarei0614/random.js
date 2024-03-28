import {NumberConfig} from "../utils/config.model";

export class RandomNumber {
    min: number;
    max: number;
    includeNegatives: boolean;

    constructor(config: NumberConfig) {
        this.min = config.min;
        this.max = config.max;
        this.includeNegatives = config.includeNegatives;
    }

    get(config?: Partial<NumberConfig>): number {
        const min = config?.min ?? this.min;
        const max = config?.max ?? this.max;
        const includeNegatives = config?.includeNegatives ?? this.includeNegatives;
        return (includeNegatives ? Math.round(Math.random()) ? 1 : -1 : 1) *
            Math.floor((max - min + 1) * Math.random() + min);
    }
}
