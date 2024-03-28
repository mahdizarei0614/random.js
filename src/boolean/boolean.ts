import {BooleanConfig} from "../utils/config.model";

export class RandomBoolean {
    trueOutcomePercentage: number;
    constructor(config: BooleanConfig) {
        this.trueOutcomePercentage = config.trueOutcomePercentage;
    }
    get(config?: Partial<BooleanConfig>): boolean {
        const trueOutcomePercentage = config?.trueOutcomePercentage ?? this.trueOutcomePercentage;
        return Math.random() * 100 <= trueOutcomePercentage;
    }
}
