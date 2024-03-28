export class RandomImage {
    get(
        config?: { width: number; height: number } | number,
    ): string {
        const width = typeof config === 'number' ? config : config?.width ?? 200;
        const height = typeof config === 'number' ? config : config?.height ?? 200;
        return `https://picsum.photos/${width}/${height}?workAround=${Math.floor(Math.random() * 10000)}`;
    }
}
