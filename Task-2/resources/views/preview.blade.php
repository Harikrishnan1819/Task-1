<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Preview</title>
    <style>
        #output {
          vertical-align: middle;
          width: 50vh;
          height: 50vh;
          border-radius: 50%;
        }
        </style>
</head>
<body>
    <input type="file" accept="image/*" onchange="File(event)">
<img id="output"/>
<script>
  var File = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
</script>
</body>
</html>