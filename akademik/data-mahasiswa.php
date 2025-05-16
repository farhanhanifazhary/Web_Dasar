<?php
    // koneksi ke database
    mysqli_connect("localhost", "root", "", "db_akademik_tk1b");
    
    // ambil data dari tabel mahasiswa/query data mahasiswa
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
  </head>
  <body>
    <h1>Data Mahsiswa</h1>
    <a href="form-mahasiswa.php" class="btn btn-success btn-sm">Form Mahasiswa</a>
    <table class="table">
        <thead>
            <tr class="table-dark">
                <th scope="col">No</th>
                <th scope="col">NIM</th>
                <th scope="col">Nama</th>
                <th scope="col">Email</th>
                <th scope="col">Alamat</th>
                <th scope="col">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <?php
                include 'koneksi.php';
                $output = "SELECT * from tabel_mahasiswa ORDER BY nim";
                $mahasiswa = $koneksi->query($output);
                $nomor = 1;
                while($row = $mahasiswa->fetch_assoc()) {
            ?>
            <tr>
                <th scope="row"><?= $nomor++ ?></th>
                <td><?= $row['nim'] ?></td>
                <td><?= $row['nama'] ?></td>
                <td><?= $row['email'] ?></td>
                <td><?= $row['alamat'] ?></td>
                <td>
                    <a href="update-mahasiswa.php<?= $row['id'] ?>" class="btn btn-warning btn-sm">Edit</a>
                    <form action="" method="POST">
                        <input type="submit" name="delete" value="hapus" class="btn btn-danger btn-sm">
                    </form>
                </td>
            </tr>

            <?php
                }
            ?>
        </tbody>
    </table>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
  </body>
</html>