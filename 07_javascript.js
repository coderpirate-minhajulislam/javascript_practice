function loginUser(username = "admin"){

    if (!username) {
        console.log("enter username");
        return
    }
    return `${username} just login`
}

console.log(loginUser("Minhajul Islam"));