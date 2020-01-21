function ConversionPart2() {
    //
    var SignedDecimalInt = document.getElementById("2_SignedInt").value;
    var neg = false
    if (SignedDecimalInt<0)
    {
      neg = true;
      SignedDecimalInt = SignedDecimalInt.substring (1);
    }
    outputValue = "";
    while (SignedDecimalInt!=0)
    {
      outputValue = SignedDecimalInt % 2 + outputValue;
      SignedDecimalInt = Math.trunc(SignedDecimalInt / 2);
    }
    var length = outputValue.length;
    var outputValueTwosComplement= "";
    for (var i = 0; i<length;i++)
    {
      var num=outputValue.charAt(i)
        if (num==1)
        {
          outputValueTwosComplement+=""+0;
        }
        else
        {
          outputValueTwosComplement+=""+1;
        }
    }
    var carry = false
    var intArray = outputValueTwosComplement.split("");
    var twosFinalOutput = "";
    if (intArray[outputValue.length-1]=="0")
    {
      intArray[outputValue.length-1] = "1";
      for (var i = 0; i<intArray.length-1; i++)
      {
        twosFinalOutput +=intArray[i];
      }
    }
    else {
      carry = true
      for (var c = 0; c<intArray.length-1; c++){
        if (carry == true && intArray[c]==1){
          intArray[c] = 0;
        }
        else if (carry==true && intArray[c]==0){
          intArray[c]=1;
          carry = false;
        }
      }
      for (var i = 0; i<intArray.length-1; i++)
      {
        twosFinalOutput +=intArray[i];
      }
    }

    // Show the output on the screen
    FormatAndShowOutput([outputValue, twosFinalOutput, SignedDecimalInt], 2);

}
