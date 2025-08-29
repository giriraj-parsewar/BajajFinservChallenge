const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const FULL_NAME = "Giriraj Pradeep Parsewar"; 
const DOB_DDMMYYYY = "18102003";              
const EMAIL = "girirajpradeepparsewar2022@vitbhopal.ac.in";
const ROLL = "22BCE10681";

function isNumericString(s) {
  return typeof s === "string" && /^[+-]?\d+$/.test(s);
}
function isAlphaString(s) {
  return typeof s === "string" && /^[A-Za-z]+$/.test(s);
}
function toUserId(name, dob) {
  return name.trim().toLowerCase().replace(/\s+/g, "_") + "_" + dob;
}
function altCapsFromReversedLetters(allLetters) {
  const reversed = allLetters.split("").reverse();
  return reversed
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
}

app.post("/bfhl", (req, res) => {
  try {
    const data = Array.isArray(req.body?.data) ? req.body.data : null;
    if (!data) {
      return res.status(200).json({
        is_success: false,
        user_id: toUserId(FULL_NAME, DOB_DDMMYYYY),
        email: EMAIL,
        roll_number: ROLL,
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: "0",
        concat_string: ""
      });
    }

    const odd = [];
    const even = [];
    const alphabets = [];
    const specials = [];

    let sum = 0;
    let lettersCollected = "";

    for (const item of data) {
      const s = String(item);

      // gather ALL alphabetical characters for concat_string
      const lettersOnly = s.match(/[A-Za-z]/g);
      if (lettersOnly) lettersCollected += lettersOnly.join("");

      if (isNumericString(s)) {
        const n = parseInt(s, 10);
        sum += n;
        if (Math.abs(n) % 2 === 0) even.push(s);
        else odd.push(s);
      } else if (isAlphaString(s)) {
        alphabets.push(s.toUpperCase());
      } else {
        specials.push(s);
      }
    }

    const response = {
      is_success: true,
      user_id: toUserId(FULL_NAME, DOB_DDMMYYYY),
      email: EMAIL,
      roll_number: ROLL,
      odd_numbers: odd,
      even_numbers: even,
      alphabets: alphabets,
      special_characters: specials,
      sum: String(sum), 
      concat_string: altCapsFromReversedLetters(lettersCollected)
    };

    return res.status(200).json(response); 
  } catch (e) {
    return res.status(200).json({
      is_success: false,
      user_id: toUserId(FULL_NAME, DOB_DDMMYYYY),
      email: EMAIL,
      roll_number: ROLL,
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
      special_characters: [],
      sum: "0",
      concat_string: ""
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`BFHL API running on :${PORT}`));
