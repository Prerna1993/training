var Animal = function (master, age , sex){
	this.master=master,
	this.age=age,
	this.sex=sex

};
var horse = new Animal("naku",7,"m");
var dog = new Animal("aynu",6,"m");
var cat = new Animal("peru",3,"f");
var jenny = Object.create(horse);
jenny.age=2;

document.getElementById("horse_master").innerHTML=horse.master;
document.getElementById("dog_master").innerHTML=dog.master;
document.getElementById("cat_master").innerHTML=cat.master;
document.getElementById("horse_sex").innerHTML=horse.sex;
document.getElementById("dog_sex").innerHTML=dog.sex;
document.getElementById("cat_sex").innerHTML=cat.sex;
document.getElementById("horse_age").innerHTML=horse.age;
document.getElementById("jenny_age").innerHTML=jenny.age;
document.getElementById("dog_age").innerHTML=dog.age;
document.getElementById("cat_age").innerHTML=cat.age;