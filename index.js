console.log("Backend journey started");

function ilkFonksiyon() {    //temel olarak fonksiyon bu şekilde oluşturulur. (function fonksiyonAdı() {})


}

function parametreliFunction(name) {//parantez içinde değişken belirtilirse fonksiyonu çağırırken o değişken belirtilir ve fonksiyonun çekmesi sağlanır.

    console.log("Merhaba " + name + " hoşgeldin.");

}

parametreliFunction("Omer");

function sum(x , y) {

    return x+y;
}
 
const result = sum(15 , 5);

console.log(result);

//Örnek
const users = [
  { id: 1, name: "Ali", age: 20, active: true },
  { id: 2, name: "Veli", age: 17, active: true },
  { id: 3, name: "Ayşe", age: 25, active: false },
  { id: 4, name: "Fatma", age: 30, active: true }
];
//Kullanıcılardan sadece aktif ve 18 den büyük olanlar işlem yapabilsin

let user;
function canProcess(users) {

    if (!users) return "Kullanıcı yok";
    if (!users.active) return "Aktif değil";
    if (users.age < 18) return "18 yaşından küçük";
    return "İşlem yapılabilir";
}
for (user of users) {console.log(user.name + ": " + canProcess(user));}

//filter methodu
let activeUsers = users.filter(user => user.active);
console.log(activeUsers);

//map methodu (örnekte user objelerinin name i stringe dönüştürülüyor.)
let names = users.map(user => user.name);
console.log(names);

//find methodu (şarta uyan ilk objeyi bul ve dur)
const foundUser = users.find(user => user.name === "Ali");
console.log(foundUser);

