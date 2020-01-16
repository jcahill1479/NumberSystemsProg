function ConversionPart1() {

    var UnsignedInt = document.getElementById("1_UnsignedInt").value;
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);

    //going to base ten
    var value = 0;
    var counter = 0;
    while (counter<=UnsignedInt.length-1)
    {
      var digit = parseInt(UnsignedInt.substring(counter, counter+1));
      value = value*UnsignedIntBaseFrom+digit;
      counter++;
    }

    //base ten to designated base
    var newValue =value;
    
  var outputValue = newValue;

  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
