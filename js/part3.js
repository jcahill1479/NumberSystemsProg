
function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);

  var decimal = "";
  var leftOfDecimal = "";
  var decimalplace = floatAsString.indexOf(".");

  var justDecimal = floatToConvert - truncated;

  //finding binary of stuff to the left of decimal
  while (truncated>2)
  {
    leftOfDecimal = truncated%2 + "" + leftOfDecimal;
    truncated = Math.trunc(truncated / 2);
  }
  if (truncated >0)
  {
    leftOfDecimal = truncated + ""+leftOfDecimal;
  }
  //find binary of the decimal if there is one
  if (floatAsString.indexOf(".")==-1)
  {
    decimal = "";
  }
  else{
    if (justDecimal != 0)
    {
      while (leftOfDecimal.length+decimal.length<23)
      {
        justDecimal = justDecimal*2;
        if (justDecimal<1)
        {
          decimal = decimal + "0";
        }
        else {
          decimal = decimal+"1";
          justDecimal = justDecimal-1;
        }
      }
    }
  }
  var leftOfDecNoOne = leftOfDecimal.substring(1);
  var numberInBinary = leftOfDecNoOne + "" + decimal;

  var exponent = leftOfDecimal-1 +128;
  var binaryExponent = "";
  while (exponent>=2)
  {
    binaryExponent = exponent%2 + "" + binaryExponent;
    exponent = Math.trunc(exponent / 2);
  }
  if (exponent >0)
  {
    binaryExponent = exponent + ""+binaryExponent;
  }
  output32BitScientificNotation = "" + binaryExponent + sign + numberInBinary;

  while (output32BitScientificNotation.length<32)
  {
    output32BitScientificNotation = output32BitScientificNotation+ "0";
  }




  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, output32BitScientificNotation], 3);
}


// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0
