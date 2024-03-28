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
const randomText = random.string.get({min: 5, max: 40})
const randomNumber = random.number.get({min: 5, max: 40});
const randomBoolean = random.boolean.get();
const randomDate = random.date.get(new Date('2022-01-01'), new Date('2023-01-01'));
const randomImage = random.image.get(400);
```

Create a `random.config.json` file in the root of your project and customize the outcome as you wish.

That's it! Enjoy!

You can support my work through donate section of my portfolio at https://izarei.ir.
