import {Config} from "../utils/config.model";

export const config: Config = {
    string: {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis ut 
  velit ac commodo. Ut hendrerit turpis vitae fermentum hendrerit. Pellentesque 
  malesuada risus nec aliquam varius. Pellentesque quis fringilla arcu, sed tempor 
  ipsum. Donec fermentum tempor lectus, efficitur efficitur lorem elementum at. Morbi 
  et euismod quam. Aliquam gravida mauris leo, ac suscipit purus elementum vel. Phasellus 
  mattis lorem in ligula vestibulum finibus. Sed tempor velit tellus, quis auctor nunc 
  molestie nec. Etiam et interdum nisi, nec mattis leo. Donec pharetra aliquet ante ac 
  faucibus. Nullam interdum finibus ex. Fusce commodo feugiat mi, et dignissim erat 
  malesuada a. Nam id nisl augue. Praesent facilisis velit at massa condimentum vehicula. 
  Sed porttitor lorem mollis mauris laoreet, sed interdum ligula placerat. Integer cursus 
  lacus interdum, ullamcorper ex nec, porttitor massa. Etiam et aliquet felis. Sed 
  scelerisque gravida placerat. Maecenas eleifend libero nec tincidunt ultrices. Nunc 
  mattis lectus ligula, ac ornare ipsum finibus sit amet. Nam venenatis vehicula elit 
  vel interdum. Pellentesque ullamcorper, urna varius faucibus imperdiet, est massa congue 
  purus, aliquet fringilla mauris magna nec nunc. Aliquam erat volutpat. Etiam sit amet 
  fringilla dui. Maecenas congue magna ac sapien laoreet, ac aliquet neque posuere. Sed 
  tempus fermentum eros quis bibendum. Nam condimentum quis magna non rutrum. Fusce ultrices 
  nibh vitae tellus convallis, vel feugiat quam facilisis. Sed sit amet diam in risus 
  placerat feugiat. Curabitur euismod nibh in nibh posuere, egestas faucibus tellus fringilla. 
  Vivamus et cursus est, ut pretium ipsum. Nam non mi tristique, aliquet arcu at, porttitor 
  nulla. Nulla suscipit erat mi, vitae pharetra metus interdum eu. Sed ex ante, rutrum quis 
  massa at, pulvinar lobortis urna. Duis ultricies elit eget tellus porttitor dictum. 
  Phasellus et semper diam. Nunc non blandit nunc. Phasellus in lectus in lacus convallis 
  auctor sed et turpis. Nulla in nisi finibus, consequat quam id, commodo elit. 
  Pellentesque vitae gravida metus. Nullam at turpis tristique, iaculis purus at, 
  consectetur tellus. Vestibulum eros libero, pellentesque a leo a, porta ullamcorper 
  leo. Suspendisse commodo mattis augue, nec vulputate quam finibus vitae. Curabitur 
  ut luctus arcu, in faucibus mi. Vestibulum risus justo, venenatis ut mi ac, blandit 
  aliquet enim. Fusce at enim laoreet, gravida elit id, laoreet nunc. Proin nibh nisi, 
  vehicula id dapibus ut, sollicitudin ut libero. Phasellus ante lectus, iaculis quis 
  dolor nec, scelerisque hendrerit leo. Suspendisse egestas cursus erat vel fermentum. 
  Etiam efficitur volutpat dolor, lobortis commodo ex consequat nec. Phasellus convallis 
  est vel finibus viverra. Nulla sagittis elementum nibh eget tristique. Maecenas 
  tincidunt nulla sit amet rhoncus auctor. Cras vestibulum pharetra libero finibus 
  auctor. Praesent purus velit, euismod nec nulla vitae, ornare venenatis nisi. Proin euismod 
  nisi sit amet justo convallis volutpat. Proin maximus, dolor sed varius mattis, tortor est 
  dapibus tellus, vitae pellentesque libero enim sed massa.`,
        minLength: 1,
        maxLength: 200,
        shuffle: true
    },
    date: {
        minDate: new Date('1970-01-01'),
        maxDate: new Date()
    },
    number: {
        min: 0,
        max: Number.MAX_VALUE - 1,
        includeNegatives: false
    },
    boolean: {
        trueOutcomePercentage: 50
    }
}
