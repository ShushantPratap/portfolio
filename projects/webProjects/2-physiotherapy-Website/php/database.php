<?php
$conn = mysqli_connect("localhost","root","","ortho") or die("Connection Failed");

$sql = "SELECT * FROM appointments";
$result = mysqli_query($conn,$sql) or die("SQL Query Failed.");

$output = '';
if(mysqli_num_rows($result) > 0){
    $output .='<table border="1" class="table table-responsive table-striped">
        <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Mobile No.</th>
            <th>Email</th>
            <th>Date</th>
            <th>Appointment Of...</th>
            <th class="remove-btn">Remove</th>
        </tr>';
        
    for($i=1; $row=mysqli_fetch_assoc($result); $i++){
        $output .="<tr class='table-row'>
            <td>{$i}</td>
            <td>{$row["Name"]}</td>
            <td>{$row["Mobile"]}</td>
            <td>{$row["Email"]}</td>
            <td>{$row["Date"]}</td>
            <td>{$row["Appointments"]}</td>
            <td class='remove-btn'>
                <button class='delete-btn btn btn-danger' data-id='{$row["Id"]}'>Remove</button></td>
           </tr>";
}
$output .= "</table>";

mysqli_close($conn);
echo $output;

}else{
    echo '<div class="oops">
      <h1>Oops!</h1>
      <h2>Sorry No Record Found?</h2>
  </div>';
}
?>
