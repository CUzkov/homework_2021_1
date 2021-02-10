'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Проверка при нормальных данных', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Проверка при крайних значениях', function (assert) {
		assert.deepEqual(anagram(null), []);
		assert.deepEqual(anagram('null'), []);
		assert.deepEqual(anagram([]), []);
		assert.deepEqual(anagram([null]), []);
		assert.deepEqual(anagram(undefined), []);
		// не навязываем функционал, только со строками работает, остальное фильтруем
		assert.deepEqual(anagram([123123, 132123]), []);
		assert.deepEqual(anagram([123123, false, true, false]), []);
		assert.deepEqual(anagram(() => alert('oops')), []);
		assert.deepEqual(anagram({}, {}, []), []);
		assert.deepEqual(anagram([{}, {}, 'string']), []);
		assert.deepEqual(anagram([{}, {}, 'string', 'string']), [['string', 'string']]);
		assert.deepEqual(anagram([() => alert('oops'), () => alert('oops')]), []);
	});
});
