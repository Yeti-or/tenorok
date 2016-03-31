'use strict';

const b_ = require('bem-naming').stringify;

class Tenorok {
	constructor(obj) {
		if (!Tenorok.isTenorok(obj)) {
			throw new Error('This is not valid tenorok!');
		}
		this._obj = obj;
		this._obj.modName && (this._obj.modVal = this._obj.modVal || true);
	}

	get block() { return this._obj.block }

	get elem() { return this._obj.elem }

	get modName() { return this._obj.modName }

	get modVal() { return this._obj.modVal }

	toString() {
		return b_(Object.assign({ block: '&' }, this._obj));
	}

	static isTenorok(tenorok) {
		return tenorok && (tenorok.block || tenorok.elem || tenorok.modName);
	}
}

module.exports = Tenorok;
