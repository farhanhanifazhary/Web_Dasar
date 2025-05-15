<?php
    $anakAyam = 10;
    echo "Anak ayam turun $anakAyam <br>";
    while($anakAyam > 1) {
        echo "Anak ayam turun $anakAyam, mati satu tinggal " . $anakAyam - 1 . "<br>";
        $anakAyam--;
    }
    echo "Anak ayam turun $anakAyam, mati satu tinggal induknya";

    echo "<br><br>";

    $anakAyam = 10;
    echo "Anak ayam turun $anakAyam <br>";
    do {
        echo "Anak ayam turun $anakAyam, mati satu tinggal " . $anakAyam - 1 . "<br>";
        $anakAyam--;
    }while($anakAyam > 1);
    echo "Anak ayam turun $anakAyam, mati satu tinggal induknya";
?>