# random.js
### A cool random data generator!

---

Install Command:
```
npm install @skybluedev/random.js
```

Import:
```
import random from '@skybluedev/random.js';
```

Usage:
```
const random = new Random();

const randomText = random.string.get({min: 5, max: 40});
const randomNumber = random.number.get({min: 5, max: 40});
const randomBoolean = random.boolean.get();
const randomDate = random.date.get(new Date('2022-01-01'), new Date('2023-01-01'));
const randomImage = random.image.get(400);
```

Passing user config:

```
const random = new Random({
    text: 'Hi I am Mahdi Zarei'
});

const randomText = random.string.get(3); // Mahdi Hi am
```

That's it! Enjoy!

You can support my work through donate section of my portfolio at https://izarei.ir.
