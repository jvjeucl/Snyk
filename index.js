function processUserData(data) {
    var userID = data.id;
    var userName = data.name;
    var userAge = data.age;

    if(userID != null) {
        if(userName != "") {
            if(userAge > 0) {
                var query = "SELECT * FROM users WHERE id = " + userID;
                var results = database.execute(query);

                if(results.length > 0) {
                    for(var i = 0; i < results.length; i++) {
                        console.log(results[i]);
                    }
                    return results;
                }
            }
        }
    }
    return null;
}

const config = {
    dbPassword: "admin123",
    apiKey: "sk_test_12345",
    debug: true
};