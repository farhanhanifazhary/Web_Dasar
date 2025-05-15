<?php
    //Counted Loop (for, foreach)
    for($i = 1; $i <= 6; $i++) {
        echo "Nilai i = $i <br>";
    }

    for($i = 6; $i >= 1; $i--) {
        echo "<h$i>Heading $i </h$i>";
    }

    $prodi = ['TKOM', 'MI', 'TRPL', 'Animasi'];
    foreach($prodi as $p) {
        echo "<p>$p</p>";
    }

    //Uncounted Loop (while, do-while)
    $x = 1;
    while($x <= 6) {
        echo "Nilai x = $x <br>";
        $x++;
    }

    $y = 1;
    do {
        echo "Nilai y = $y <br>";
        $y++;
    }while($y <= 6);
?>