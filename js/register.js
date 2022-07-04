const loLettet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "j",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upLettet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "Q",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const symbols = [
  "#",
  "$",
  "!",
  "%",
  "&",
  "*",
  "^",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "@",
  "-",
  "+",
  "=",
  "<",
  ">",
  "?",
  "/",
  ",",
  ".",
  "`",
  "~",
];

const para = document.createElement("p");
const paraPassMatch = document.createElement("p");
const paraPassStrenght = document.createElement("p");
//                   email
const email = document.getElementById("email");

//               email info
const emailInfo = document.querySelector(".check-info-email");

//             passwords
const password = document.getElementById("pass");
const rePassword = document.getElementById("pass-repeat");

//             password info
const passwordStrenght = document.querySelector(".password-strenght");
const strenght = document.querySelector(".strenght");
const strenghtDescr = document.querySelector(".pass-strenght-info");

const passMatch = document.querySelector(".check-info-password");

//                registration date
const regDate = document.getElementById("reg-date");

//                 check email and password
const checker = document.querySelector(".check-validity");

const firtsPass = document.querySelector(".first-pass");
const secodPass = document.querySelector(".second-pass");

const low = document.querySelector(".lower");
const cap = document.querySelector(".capital");
const num = document.querySelector(".number");
const sym = document.querySelector(".symbol");

//                    date

const date = new Date();
const year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

function fixDate() {
  if (month < 10) {
    month = `0${month}`;
  } else {
    month = month;
  }
  if (day < 10) {
    day = `0${day}`;
  } else {
    day = day;
  }
}

function registerDate() {
  fixDate();
  regDate.value = `${year}-${month}-${day}`;
}
registerDate();

//                                    check function
firtsPass.addEventListener("input", () => {
  checkPassword();
});
secodPass.addEventListener("input", () => {
  checkPasswordMatch();
});

///                               password validity
function checkPassword() {
  let passVal = password.value;

  let lowercase = false;
  let uppercase = false;
  let containsNumber = false;
  let containsSymbol = false;

  ///                            check if includes   lower-upper lerrers, numbers
  for (i = 0; i < loLettet.length; i++) {
    // lower
    if (passVal.includes(loLettet[i])) {
      lowercase = true;
      low.style.color = "#00ff00";
    }

    //upper
    if (passVal.includes(upLettet[i])) {
      uppercase = true;
      cap.style.color = "#00ff00";
    }
    //number
    if (passVal.includes(`${i}`)) {
      containsNumber = true;
      num.style.color = "#00ff00";
    }
  }
  ///                             check if contains symbols
  for (i = 0; i < symbols.length; i++) {
    if (passVal.includes(symbols[i])) {
      containsSymbol = true;
      sym.style.color = "#00ff00";
    }
  }

  /////             check ps strength

  ///                           Weak
  if (lowercase || uppercase || containsNumber || containsSymbol) {
    passwordStrenght.style.display = "grid";
    strenght.style.display = "block";
    strenght.style.backgroundColor = "red";
    strenghtDescr.style.display = "block";
    strenghtDescr.textContent = "weak";
  }
  ///                          Medium
  if (
    (lowercase && uppercase) ||
    (lowercase && containsNumber) ||
    (lowercase && containsSymbol) ||
    (uppercase && containsNumber) ||
    (uppercase && containsSymbol) ||
    (containsNumber && containsSymbol)
  ) {
    passwordStrenght.style.display = "grid";
    strenght.style.display = "block";
    strenght.style.backgroundColor = "yellow";
    strenghtDescr.style.display = "block";
    strenghtDescr.textContent = "medium";
  }
  //                             Strong
  if (
    (lowercase && containsNumber && containsSymbol) ||
    (lowercase && uppercase && containsSymbol) ||
    (uppercase && containsNumber && containsSymbol) ||
    (lowercase && uppercase && containsNumber)
  ) {
    passwordStrenght.style.display = "grid";
    strenght.style.display = "block";
    strenght.style.backgroundColor = "yellowgreen";
    strenghtDescr.style.display = "block";
    strenghtDescr.textContent = "strong";
  }

  //                          Very Strong
  if (lowercase && uppercase && containsNumber && containsSymbol) {
    passwordStrenght.style.display = "grid";
    strenght.style.display = "block";
    strenght.style.backgroundColor = "green";
    strenghtDescr.style.display = "block";
    strenghtDescr.textContent = "very strong";
  }
}

///                           password match
function checkPasswordMatch() {
  const pass = password.value;
  const repass = rePassword.value;
  paraPassMatch.textContent = "";
  //                              check if match
  if (pass === repass) {
    paraPassMatch.textContent = "passwords match";
    passMatch.style.border = "green solid";
  } else {
    paraPassMatch.textContent = "passwords doesn't match";
    passMatch.style.border = "red solid";
  }

  //                 check if empty
  if (repass == "" || pass == "") {
    paraPassMatch.textContent = "you must enter password!";
    passMatch.style.border = "red solid";
  }

  ////             finish
  passMatch.style.display = "block";
  passMatch.appendChild(paraPassMatch);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                     email validity
// function checkEmail() {
//   const emval = email.value;
//   let siteAddress = false;
//   let domain = false;
//   para.textContent = "";

//   /////                                   check  site adress
//   for (i = 0; i < emval.length; i++) {
//     if (emval.charAt(i) == "@" && i > 1) {
//       if (emval.charAt(i + 1) != "." && emval.charAt(i + 2) != ".") {
//         siteAddress = true;
//       } else {
//         para.textContent += "link adress length must be at last 2 letters!!  ";
//       }
//     }
//   }
//   /////                                   check  domain

//   for (i = emval.length; i > emval.length - 3; i--) {
//     if (emval.charAt(i) == ".") {
//       domain = false;
//       para.textContent += "domain length must be at last 2 letters!!";
//     } else {
//       domain = true;
//     }
//   }
//   //                                            check if empty
//   if (emval.length >= 4 && !emval.includes("@")) {
//     para.textContent = "email must include @";
//   } else if (emval.length <= 3) {
//     para.textContent = "you must enter email!!";
//   }
//   ////                           finish
//   if (siteAddress && domain) {
//     para.textContent = " email is valid";
//     emailInfo.style.border = "green solid";
//   } else {
//     emailInfo.style.border = "red solid";
//   }

//   emailInfo.style.display = "block";
//   emailInfo.appendChild(para);
// }
