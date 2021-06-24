//Arrays of all the characters that can be used to generate a password
//Arrays created with null element at front because Math.Floor(Math.random) starts count from 1 instead of 0
var upperCaseInitialArray = [null, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseInitialArray = [null, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericInitialArray = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];
var specialCharactersInitialArray = [null, '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

//Sliced the null element out of the arrays so that they can start counting from 1 instead of 0 and work with Math.floor(Math.random)
var upperCase = upperCaseInitialArray.slice(1);
var lowerCase = lowerCaseInitialArray.slice(1);
var numeric = numericInitialArray.slice(1);
var specialCharacters = specialCharactersInitialArray.slice(1);


// var merge = upperCase.concat(lowerCase).concat(numeric).concat(specialCharacters);
// var mergeLength = merge.length;






function newPassword() {

    var length = parseFloat(prompt("How many characters would you like your password to be? Please enter a number ranging between 8 to 128 characters."));
    var merge;
    var passWord = [];

    if (Number.isInteger(length) === false || length < 8 || length > 128) {
        alert("Please Try Again");
        return false;
    } else {
        var characterType = prompt("What type of characters would you like to use in your password? Would You like to use Uppercase characters? Please enter yes or no.");

        if (characterType !== "yes" && characterType !== "no") {
            alert("Please Try Again");
            return false;
        } else {
            var characterType2 = prompt("Would You like to use Lowercase characters? Please enter yes or no.");

            if (characterType2 !== "yes" && characterType2 !== "no") {
                alert("Please Try Again");
                return false;

            } else {
                var characterType3 = prompt("Would You like to use Numeric characters? Please enter yes or no.");

                if (characterType3 !== "yes" && characterType3 !== "no") {
                    alert("Please Try Again");
                    return false;

                } else {
                    var characterType4 = prompt("Would You like to use Special Characters? Please enter yes or no.");

                    if (characterType4 !== "yes" && characterType4 !== "no") {
                        alert("Please Try Again");
                        return false;
                    } else {
                        if (characterType === "yes" && characterType2 === "yes" && characterType3 === "yes" && characterType4 === "yes") {
                            merge = upperCase.concat(lowerCase).concat(numeric).concat(specialCharacters);

                        } else if (characterType === "yes" && characterType2 === "yes" && characterType3 === "yes") {
                            merge = upperCase.concat(lowerCase).concat(numeric);

                        } else if (characterType === "yes" && characterType3 === "yes" && characterType4 === "yes") {
                            merge = upperCase.concat(numeric).concat(specialCharacters);

                        } else if (characterType === "yes" && characterType2 === "yes") {
                            merge = upperCase.concat(lowerCase);


                        } else if (characterType === "yes" && characterType3 === "yes") {
                            merge = upperCase.concat(numeric)


                        } else if (characterType === "yes" && characterType4 === "yes") {
                            merge = upperCase.concat(specialCharacters);

                        } else if (characterType === "yes") {
                            merge = upperCase;

                        } else if (characterType2 === "yes" && characterType3 === "yes" && characterType4 === "yes") {
                            merge = lowerCase.concat(numeric).concat(specialCharacters);

                        } else if (characterType2 === "yes" && characterType3 === "yes") {
                            merge = lowerCase.concat(numeric);

                        } else if (characterType2 === "yes" && characterType4 === "yes") {
                            merge = lowerCase.concat(specialCharacters)

                        } else if (characterType2 === "yes") {
                            merge = lowerCase;

                        } else if (characterType3 === "yes" && characterType4 === "yes") {
                            merge = numeric.concat(specialCharacters);

                        } else if (characterType3 === "yes") {
                            merge = numeric;

                        } else if (characterType4 === "yes") {
                            merge = specialCharacters;
                        } else {
                            console.log("You did not select any characters");
                            return false;
                        }

                        for (var i = 0; i < merge.length; i++) {
                            var random = Math.floor(Math.random() * merge.length);
                            passWord.push(merge[random]);
                        };

                        document.querySelector(".pw").innerText = passWord.slice(0, length).join("");

                    }

                };
            };
        };

    };


};

document.querySelector(".btn").addEventListener("click", newPassword);


