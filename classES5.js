//Конструкторы и классы
/*
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log('hello ' + this.name);
    };
}

User.prototype.exit = function(name) {
    console.log('Пользователь ' + this.name + ' ушел');
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

    console.log(ivan.hello());
    console.log(alex.hello());


    ivan.exit();

    
    function showThis (a, b) {
        console.log(this);
        function sum() {
            console.log(this);
            return a + b;
        }
        console.log(sum());
    }
    showThis(4, 5);
    showThis(5, 5);


    let obj = {
        a: 20,
        b: 15,
        sum: function(){
            console.log(this);
            function shout() {
                console.log(this);
            }
            
        }
    };

    obj.sum();*/
    let user = {
        name: "john"
    };

    function sayName(surname){
        console.log(this);
        console.log(this.name + surname);
    }


    console.log(sayName.call(user, ' annna'));//принимает в виже строки
    console.log(sayName.apply(user, [' ann'])); //принимает в виде массива

    function count(number) {
        return this * number;
    }
    let double = count.bind(2);
    console.log(double(2));
    console.log(double(10));
   // 1) Просто вызов функции - либо Window либо undefined
   // 2) Метод обьекта - this = обьект
   // 3) Конструктор (new) - this = новый созданный обьект
   // 4) Указание конкретного контекста - call, aplly, bind
