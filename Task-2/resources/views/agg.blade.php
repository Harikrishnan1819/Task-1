<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container mt-5">
        <form action="" method="POST">
    
         <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" name="n" class="form-control" placeholder="Enter something">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" name="n2" class="form-control" placeholder="Enter something">
                </div>
            </div>
         </div>
            <div class="dropdown">
             <button class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
             Select Action
             </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item"  href="#">Addition</a></li>
              <li><a class="dropdown-item" href="#">Subraction</a></li>
              <li><a class="dropdown-item" href="#">Multiple</a></li>
              <li><a class="dropdown-item" href="#">Division</a></li>
             </ul>
            </div>
        </form> 
    </div>
    
    <?php
        if(isset($_POST['a']))
        {
            $n = $_POST['n'];
            $n2 = $_POST['n2'];
            $add = $n+$n2;
            echo "Addition is :".$add;
        }
    
    ?>


</body>
</html>