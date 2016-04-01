import test from 'ava';

import Tenorok from '../lib';

const blockName = 'B';
const elemName = 'E';
const modName = 'M';
const modVal = 'V';

test('Tenorok validation', t => {
    t.throws(() => new Tenorok());
    t.notThrows(() => new Tenorok({block: blockName}));
    t.notThrows(() => new Tenorok({elem: elemName}));
    t.notThrows(() => new Tenorok({modName: modName, modVal: modVal}));
    t.throws(() => new Tenorok({modVal: 42}));
    t.throws(() => new Tenorok({customField: 42}));
});

test('Tenorok toString', t => {
    let tenorok = new Tenorok({block: blockName});
    t.is(tenorok.toString(), blockName);

    tenorok = new Tenorok({elem: elemName});
    t.is(tenorok.toString(), '&__' + elemName);

    tenorok = new Tenorok({modName: modName});
    t.is(tenorok.toString(), '&_' + modName);

    tenorok = new Tenorok({elem: elemName, modName: modName});
    t.is(tenorok.toString(), '&__' + elemName + '_' + modName);
});

test('Tenorok block', t => {
    const tenorok = new Tenorok({block: blockName});

    t.is(tenorok.block, blockName);
});

test('Tenorok elem', t => {
    const tenorok = new Tenorok({elem: elemName});

    t.is(tenorok.elem, elemName);
    t.notOk(tenorok.block, 'And there is no block!');
});

test('Tenorok mods', t => {
    let tenorok = new Tenorok({modName: modName, modVal});
    t.is(tenorok.modName, modName);
    t.is(tenorok.modVal, modVal);
    t.notOk(tenorok.block, 'And there is no block!');

    tenorok = new Tenorok({modName: modName});
    t.true(tenorok.modVal, 'Bool modVal for modName');
});
