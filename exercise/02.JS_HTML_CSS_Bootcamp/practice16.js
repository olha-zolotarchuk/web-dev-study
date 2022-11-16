
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Батьки дозволили?');
//     }
// }

function checkAge(age) {

    return (age > 18) ? true : confirm('Батьки дозволили?');
}

function checkAge2(age) {

    return2(age > 18) || confirm('Батьки дозволили?')
}
