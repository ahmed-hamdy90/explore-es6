'use strict';

module.exports = {
	validateId
};

// use new ES6 const keyword to declare Constant variables
const ID_PREFIX = 'USER_';

/**
 * validate Id value that it's type is string
 * and begin with ID_PREFIX constant value
 * @param  {*} id  id value
 * @return {boolean} result of id validation 
 */
function validateId(id) {
	return typeof id === 'string' && id.indexOf(ID_PREFIX) === 0;
} 