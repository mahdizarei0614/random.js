export class Config {
    string: StringConfig;
    number: NumberConfig;
    boolean: BooleanConfig;
    date: DateConfig;
}

export class PartialConfig {
    string?: Partial<StringConfig>;
    number?: Partial<NumberConfig>;
    boolean?: Partial<BooleanConfig>;
    date?: Partial<DateConfig>;
}

export class StringConfig {
    text: string;
    minLength: number;
    maxLength: number;
    fixedLength?: number
    shuffle: boolean;
}

export class NumberConfig {
    min: number;
    max: number;
    includeNegatives: boolean;
}

export class BooleanConfig {
    trueOutcomePercentage: number;
}

export class DateConfig {
    minDate: Date;
    maxDate: Date;
}

export class ImageConfig {
    includeBase64: boolean;
}
