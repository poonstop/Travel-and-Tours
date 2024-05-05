<?php
require_once '../../../conn.php';

if(isset($_POST['search'])){
    $search = $_POST['search'];
    $sql = "SELECT * FROM tbl_pack WHERE title LIKE '%$search%'";
}else{
    $sql = "SELECT * FROM tbl_pack";
}
$result = $conn->query($sql);
$result_set = $result->fetchAll();
if($result_set){
    foreach($conn->query($sql) as $row){ 
        ?>
        <tr>
            <th><?=$row["pack_code"];?></th>
            <td><?=$row["title"];?></td>
            <td><?=$row["locations"];?></td>
            <td><pre>Number of availers</pre></td>
            <td><pre>Initial Income</pre></td>
        </tr>
        <?php
    }
}else{
    ?>
    <td colspan="6"><center><h2 class="text-muted">No Record</h2><center></td>
    <?php
}

?>