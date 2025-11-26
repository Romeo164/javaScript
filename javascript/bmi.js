// BMI Calculator

let inputWeight = prompt("तपाईंको तौल कति केजी छ? (kg)");
let inputHeight = prompt("तपाईंको उचाइ कति सेन्टिमिटर छ? (cm)");

// String लाई Number मा बदल्नै पर्छ!
let weight = parseFloat(inputWeight);
let heightCm = parseFloat(inputHeight);

// यदि यूजरले नम्बर नहालेको भए रोक्ने
if (isNaN(weight) || isNaN(heightCm) || heightCm <= 0 || weight <= 0) {
  alert("कृपया सही नम्बर हाल्नुहोस्!");
} else {
  // BMI गणना गर्ने function
  function bmiCalculator(weight, heightCm) {
    let heightMeter = heightCm / 100;           // cm → meter
    let bmi = weight / Math.pow(heightMeter, 2);
    return bmi;
  }

  // BMI calculate गर्ने
  let bmi = bmiCalculator(weight, heightCm);
  let bmiFixed = bmi.toFixed(2);   // एक दशमलवसम्म

  // सन्देश तयार पार्ने
  let message = "";

  if (bmi < 16) {
    message = "तपाईंलाई Severe Thinness छ। धेरै खानुहोस्!";
  } else if (bmi <= 17) {
    message = "तपाईं Moderate Thin हुनुहुन्छ। ख्याल गर्नुहोस्।";
  } else if (bmi <= 18.5) {
    message = "तपाईं Mild Thin हुनुहुन्छ।";
  } else if (bmi <= 25) {
    message = "तपाईंको तौल एकदम ठीक छ! स्वस्थ हुनुहुन्छ।";
  } else if (bmi <= 30) {
    message = "तपाईं अलि मोटो हुनुहुन्छ (Overweight)।";
  } else if (bmi <= 35) {
    message = "ओ भाई! Obesity Class I भइसक्यो।";
  } else if (bmi <= 40) {
    message = "Obesity Class II - अब गम्भीर ध्यान दिनुहोस्!";
  } else {
    message = "धेरै खतरा छ! डाक्टरसँग तुरुन्तै सल्लाह लिनुहोस्।";
  }

  // अन्तिममा सबै देखाउने
  alert(`तपाईंको BMI = ${bmiFixed}\n\n${message}`);
}