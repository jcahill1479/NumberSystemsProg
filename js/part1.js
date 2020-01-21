function ConversionPart1() {

    var UnsignedInt = document.getElementById("1_UnsignedInt").value;
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);

    //going to base ten
    var value = 0;
    var counter = 0;
    var outputValue = "";
    while (counter<=UnsignedInt.length-1)
    {
      var digit = parseInt(UnsignedInt.substring(counter, counter+1));
      value = value*UnsignedIntBaseFrom+parseNum(digit);
      counter++;
    }
    //base ten to designated base
    while (value!=0)
    {
      outputValue = backwardsParseNum(value % UnsignedIntBaseTo) + outputValue;
      value = Math.trunc(value / UnsignedIntBaseTo);
    }

    FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

    function parseNum(number)
    {
      switch (number)
      {
        case "A":
          return 10;
          break;
        case "B":
          return 11;
          break;
        case "C":
          return 12;
          break;
        case "D":
          return 13;
          break;
        case "E":
          return 14;
          break;
        case "F":
          return 15;
          break;
        default:
          return parseInt(number);
          break;
      }
    }

    function backwardsParseNum(number) {
      switch (number) {
        case 10:
          return "A";
          break;
        case 11:
          return "B";
          break;
        case 12:
          return "C";
          break;
        case 13:
          return "D";
          break;
        case 14:
          return "E";
          break;
        case 15:
          return "F";
          break;
        default:
          return parseInt(number);
          break;
    }
}


  // Show the output on the screen


}
