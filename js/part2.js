function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);
    output = "";
    while (SignedDecimalInt >0)
    {
      output = output= SignedDecimalInt%2;
      SignedDecimalInt = SignedDecimalInt/2;
    }
    if (SignedDecimalInt>=0)
    {
      output += "0";
    }
    else {
      output +="1";
    }
    outputValueTwosComplement ="";

    for (var i = 0; i<length;i++)
    {
      var num=output.charAt(i)
        if (num==1)
        {
          outputValueTwosComplement+=""+0;
        }
        else
        {
          outputValueTwosComplement+=""+1;
        }
    }
    var final = output;

    // Show the output on the screen
    FormatAndShowOutput([final, outputValueTwosComplement, SignedDecimalInt], 2);
}
