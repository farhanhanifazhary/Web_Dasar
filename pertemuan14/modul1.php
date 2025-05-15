<?php
    // Ini adalah print ver php
    echo("Bismillah bisa");

    /*
    Ini contoh
    komentar banyak baris
    */

    $nama = "Hanif";
    $massage = "<p>Halo $nama, Selamat belajar PHP</p>";
    $massage = '<p>Halo' . $nama . ', Selamat belajar PHP</p>';
    echo $massage;

    //Tipe Data(String, int, float, boolean, array)
    $a = "Wahyu"; //String
    $b = 45; //integer
    $c = 3.65; //float
    $d = TRUE; //boolean
    $e = FALSE; //boolean
    $f = ["Andi", 2002, 3.9, TRUE]; //array

//    echo $f[0];
    var_dump($f);
?>