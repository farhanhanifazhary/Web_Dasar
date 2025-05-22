<?php
    include 'koneksi.php';

    if(isset($_POST['submit'])) {
        $nim = $_POST['nim'];
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $alamat = $_POST['alamat'];

    //     $sql = "INSERT INTO tabel_mahasiswa (nim, nama, email, alamat) VALUES ('$nim', '$nama', '$email', '$alamat')";
    //     $query = $koneksi->query($sql);

    //     if($query) {
    //         echo "Data mahasiswa berhasil disimpan";
    //     }else {
    //         echo "Data mahasiswa gagal disimpan";
    //     }
    // }

    //insert data dengan statement prepare
        $sql = "INSERT INTO tabel_mahasiswa (nim, nama, email, alamat) VALUES (?, ?, ?, ?)";
        $query_prepare = $koneksi->prepare($sql);
        $query_prepare->bind_param("ssss", $nim, $nama, $email, $alamat);

        if($query_prepare->execute()) {
            // echo "Data mahasiswa berhasil disimpan";
            echo "<script>
                    alert('Data mahasiswa berhasil disimpan');
                    window.location.href = 'data-mahasiswa.php';
                </script>";
        }else {
            echo "<script>
                    alert('Data mahasiswa gagal disimpan');
                    window.location.href = 'form-mahasiswa.php';
                </script>";
        }

        

        $query_prepare->close();

        
    }elseif(isset($_POST['update'])) {
        $nim = $_POST['nim'];
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $alamat = $_POST['alamat'];
        $id = $_POST['id'];

        $sql = "UPDATE tabel_mahasiswa SET nim = '$nim', nama = '$nama', email = '$email', alamat = '$alamat' WHERE id = '$id'";
        $query = $koneksi->query($sql);

        if($query) {
           echo "<script>
                    alert('Data mahasiswa berhasil disimpan');
                    window.location.href = 'data-mahasiswa.php';
                </script>";
        }else {
            echo "<script>
                    alert('Data mahasiswa gagal disimpan');
                    window.location.href = 'update-mahasiswa.php';
                </script>";
        }
    }elseif(isset($_POST['delete'])) {
        $id = $_POST['id'];

        $sql = "DELETE from tabel_mahasiswa WHERE id = '$id'";
        $query = $koneksi->query($sql);

        if($query) {
           echo "<script>
                    alert('Data mahasiswa berhasil disimpan');
                    window.location.href = 'data-mahasiswa.php';
                </script>";
        }else {
            echo "<script>
                    alert('Data mahasiswa gagal disimpan');
                    window.location.href = 'data-mahasiswa.php';
                </script>";
        }
    }
?>