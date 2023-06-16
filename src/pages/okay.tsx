// import React, { useState } from "react";

// export default function okay() {
//   const [formData, setFormData] = useState<any>("");
//   const [checkData, setCheckData] = useState(false);

//   const handleChange = (e: any) => {
//     const value = e.target.value;
//     setFormData(value);
//   };

//   const handleCheck = () => {
//     let data1 = "";
//     let data2 = "";

//     for (let i = 0; i < formData?.length; i++) {
//       const inputString = formData[0]?.toLowerCase;
//       if (/[a-zA-Z0-9]/.test(inputString)) {
//         data1 += inputString;
//         data2 = inputString + data2;
//       }
//     }
//     setCheckData(data1 === data2);
//   };

//   return (
//     <div>
//       {formData} {checkData ? "palindrome" : "not palindrome"}
//       <input type="text" value={formData} onChange={handleChange} />
//       <button onClick={handleCheck}>Check</button>
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function okay() {
//   const [formData, setFormData] = useState<any>("");
//   const [commaData, setCommaData] = useState([]);
//   const handleChange = (e: any) => {
//     //take no from user
//     const value = e.target.value;
//     setFormData(value);

//     const separateData = value.split(`,`);
//     console.log(separateData[0]);
//   };

//   return (
//     <div>
//       <input type="" value={formData} onChange={handleChange} />
//     </div>
//   );
// }
import React, { useState } from "react";

function NumberOperations() {
  const [formData, setFormData] = useState("");
  const [totaldata, setTotalData] = useState([]);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [dataSum, setDataSum] = useState(0);
  const [primeData, setprimeData] = useState([]);

  const [isPrimeData, setIsPrimeData] = useState(false);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setFormData(value);

    const totalData: any = Array.from(String(value), Number);
    setTotalData(totalData);
    setTotalDataCount(totalData.length);

    const sum = totaldata.reduce((total, data) => total + data, 0);
    setDataSum(sum);

    const primeData = totaldata.filter((data) => isPrime(data));
    setIsPrimeData(isPrimeData);
  };

  const isPrime = (n: any) => {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= n.length; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  return (
    <div>
      <input type="number" value={formData} onChange={handleChange} />
    </div>
  );
}

export default NumberOperations;

// take a number from user
// 	-- Seperate its digits by comma and print the output
// 	-- Print count of its digits
// 	-- Print sum of its digits
// 	-- Print digits which are prime number
// 	-- Check if sum of its digits is a strong number or not
