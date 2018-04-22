const Nation = nation => {
	return (target, name, descriptor) => {
		target.prototype.Nation = nation;
	}
}

@Nation('Amacian')
class Person {
	constructor (name, age, sex) {
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
}

let xyy = new Person('xyy', 18, 'woman');
console.log('xyy', xyy);
console.log('nation', xyy.Nation);
