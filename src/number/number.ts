export class RandomNumber {
    get(config?: { min?: number; max?: number, negative?: boolean }): number {
        return (
            (Math.floor(
                ((config?.max ?? (Number.MAX_VALUE - 1)) - (config?.min ?? 0) + 1) *
                Math.random() +
                (config?.min ?? 0),
            ))
        );
    }
}
