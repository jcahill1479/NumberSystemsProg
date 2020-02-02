function ConversionPart2() {
    //
    var SignedDecimalInt = document.getElementById("2_SignedInt").value;
    var substitute = document.getElementById("2_SignedInt").value;
    var neg = false
    if (SignedDecimalInt<0)
    {
      neg = true;
      SignedDecimalInt = SignedDecimalInt.substring (1);
    }
    var outputValue = "";
    while (SignedDecimalInt>=2)
    {
      outputValue = SignedDecimalInt % 2 + outputValue;
      SignedDecimalInt = Math.trunc(SignedDecimalInt / 2);
    }
    outputValue= + "" + SignedDecimalInt+outputValue;
    var length = outputValue.length;
    var outputValueTwosComplement= "";
    for (var i = 0; i<length;i++)
    {
      var num=outputValue.charAt(i)
        if (num=="1")
        {
          outputValueTwosComplement+=""+0;
        }
        else
        {
          outputValueTwosComplement+=""+1;
        }
    }
    if (outputValueTwosComplement.length<outputValue.length)
    {
      outputValueTwosComplement = "0" + outputValueTwosComplement;
    }
    var carry = false
    var intArray = outputValueTwosComplement.split("");
    var twosFinalOutput = "";
    if (intArray[outputValue.length-1]=="0")
    {
      intArray[outputValue.length-1] = "1";
      for (var i = 0; i<intArray.length; i++)
      {
        twosFinalOutput +=intArray[i];
      }
    }
    else {
      carry = true
      for (var c = 0; c<intArray.length; c++){
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
    if (twosFinalOutput.length<outputValue.length)
    {
      twosFinalOutput = twosFinalOutput + "0";
    }
    if (neg ==true)
    {
      while (twosFinalOutput.length<32)
      {
        twosFinalOutput = "1" + twosFinalOutput;
      }
      while (outputValue.length< 32)
      {
        outputValue = "0" + outputValue;
      }
    }
    else
    {
      while (twosFinalOutput.length<32)
      {
        twosFinalOutput = "1" + twosFinalOutput;
      }
      while (outputValue.length< 32)
      {
        outputValue = "0" + outputValue;
      }
    }
    // Show the output on the screen
    if (neg==true)
    {
      FormatAndShowOutput([twosFinalOutput, outputValue, substitute], 2);
    }
    else {
      FormatAndShowOutput([outputValue, twosFinalOutput, substitute], 2);

    }
}
