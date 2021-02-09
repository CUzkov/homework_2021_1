'use strict';

const tree = (number) =>
    number-- > 2 ?
    `${Array(number).fill(0).reduce(
          (acc, _, i) => `${Array(i + 1).join(' ')}${Array(2 * (number - i)).join('*')}${Array(i + 1).join(' ')}\n${acc}`,
          `${Array(number).join(' ')}|${Array(number).join(' ')}\n`
        )}` :
    null;