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

	QUnit.test('Проверка при входном значении null', function (assert) {
		const input = null;

		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Проверка при входном значении string', function (assert) {
		const input = 'null';

		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Проверка при входном значении пустого массива', function (assert) {
		const input = [];

		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Проверка при входном значении массива с null', function (assert) {
		const input = [null];

		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Проверка при входном значении undefined', function (assert) {
		const input = undefined;

		const output = [];

		assert.deepEqual(anagram(input), output);
	});
});
