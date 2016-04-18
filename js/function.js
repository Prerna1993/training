function send(name) {
    // Local variable 'name' is stored in the closure
    // for the inner function.
    return function () {
        sendHi(name);
    }
}

function sendHi(msg) {
    console.log('Hello ' + msg);
}

var func = send('Bill');
func();
// Output:
// Hello Bill
sendHi('Pete');
// Output:
// Hello Pete
// Output:
// Hello Bill