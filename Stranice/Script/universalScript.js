function saveActive() {
    let users = JSON.parse(localStorage.getItem("users"));
    let active = JSON.parse(localStorage.getItem("activeUser"));
    if (active != null) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == active.username) {
                users[i] = active;
                localStorage.setItem("users", JSON.stringify(users));
                break;
            }
        }
    }
}