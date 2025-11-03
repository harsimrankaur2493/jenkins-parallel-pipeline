
console.log("Building login feature...");
function login(user, pass) {
    if (user && pass) {
        return "Login successful!";
    } else {
        return "Login failed!";
    }
}
console.log(login("admin", "1234"));
