import {DateConfig} from "../utils/config.model";

export class RandomDate {
    minDate: Date;
    maxDate: Date;

    constructor(config: DateConfig) {
        this.minDate = config.minDate;
        this.maxDate = config.maxDate;
    }

    get(config?: Partial<DateConfig>): Date {
        const minDate = config?.minDate ?? this.minDate;
        const maxDate = config?.maxDate ?? this.maxDate;

        console.log(minDate)
        console.log(maxDate)
        return new Date(
            minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime()),
        );
    }
}
