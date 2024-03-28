export class RandomDate {
    get(
        start: Date = new Date('1970-01-01'),
        end: Date = new Date(),
    ): Date {
        return new Date(
            start.getTime() + Math.random() * (end.getTime() - start.getTime()),
        );
    }
}
