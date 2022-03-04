var mangSinhVien = [];
var kiemTra = new Validation();
document.querySelector("#btnXacNhan").onclick = function () {
  //khi người dùng click vào xác nhận thì tạo đối tượng lấy thông tin người dùng nhập
  var sinhVien = new SinhVien();
  sinhVien.maSinhVien = document.querySelector("#maSinhVien").value;
  sinhVien.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sinhVien.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sinhVien.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
  sinhVien.email = document.querySelector("#email").value;
  sinhVien.soDienThoai = document.querySelector("#soDienThoai").value;
  sinhVien.diemToan = document.querySelector("#diemToan").value;
  sinhVien.diemLy = document.querySelector("#diemLy").value;
  sinhVien.diemHoa = document.querySelector("#diemHoa").value;
  console.log(sinhVien);

  var valid = true;
  //Kiểm tra dữ liệu nhập(validation)

  //Kiểm tra rỗng
  valid &=
    kiemTra.kiemTraRong(sinhVien.maSinhVien, "#error_required_maSinhVien") &
    kiemTra.kiemTraRong(sinhVien.tenSinhVien, "#error_required_tenSinhVien") &
    kiemTra.kiemTraRong(sinhVien.diemRenLuyen, "#error_required_diemRenLuyen") &
    kiemTra.kiemTraRong(sinhVien.email, "#error_required_email") &
    kiemTra.kiemTraRong(sinhVien.soDienThoai, "#error_required_soDienThoai") &
    kiemTra.kiemTraRong(sinhVien.diemToan, "#error_required_diemToan") &
    kiemTra.kiemTraRong(sinhVien.diemLy, "#error_required_diemLy") &
    kiemTra.kiemTraRong(sinhVien.diemHoa, "#error_required_diemHoa");

  // kiểm tra ký tự

  valid &= kiemTra.kiemTraKyTu(
    sinhVien.tenSinhVien,
    "#error_all_letter_tenSinhVien"
  );
  //kiểm tra email
  valid &= kiemTra.kiemTraEmail(sinhVien.email, "#error_check_email");
  //Kiểm tra số
  valid &=
    kiemTra.kiemTraSo(sinhVien.soDienThoai, "#error_number_soDienThoai") &
    kiemTra.kiemTraSo(sinhVien.diemRenLuyen, "#error_number_diemRenLuyen") &
    kiemTra.kiemTraSo(sinhVien.diemToan, "#error_number_diemToan") &
    kiemTra.kiemTraSo(sinhVien.diemLy, "#error_number_diemLy") &
    kiemTra.kiemTraSo(sinhVien.diemHoa, "#error_number_diemHoa");

  valid &= kiemTra.kiemTraDoDai(
    sinhVien.maSinhVien,
    "#error_min_max_length_maSinhVien",
    4,
    6
  );
  valid &=
    kiemTra.kiemTraGiaTri(
      sinhVien.diemToan,
      "#error_min_max_value_diemToan",
      0,
      10
    ) &
    kiemTra.kiemTraGiaTri(
      sinhVien.diemLy,
      "#error_min_max_value_diemLy",
      0,
      10
    ) &
    kiemTra.kiemTraGiaTri(
      sinhVien.diemHoa,
      "#error_min_max_value_diemHoa",
      0,
      10
    );
  if (valid != true) {
    return;
  }
  //Đưa đối tượng sinh viên vào mảng
  mangSinhVien.push(sinhVien);
  //mỗi lần thêm sinh viên gọi hàm tạo lại table sinh viên
  renderTableSinhVien(mangSinhVien);
  //lưu mangSinhVien sau khi thêm sv vào mảng
  luuSinhVienStorage();
};

document.querySelector("#btnCapNhat").onclick = function () {
  var sinhVienUpdate = new SinhVien();
  sinhVienUpdate.maSinhVien = document.querySelector("#maSinhVien").value;
  sinhVienUpdate.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sinhVienUpdate.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sinhVienUpdate.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
  sinhVienUpdate.email = document.querySelector("#email").value;
  sinhVienUpdate.soDienThoai = document.querySelector("#soDienThoai").value;
  sinhVienUpdate.diemToan = document.querySelector("#diemToan").value;
  sinhVienUpdate.diemLy = document.querySelector("#diemLy").value;
  sinhVienUpdate.diemHoa = document.querySelector("#diemHoa").value;
  console.log(sinhVienUpdate);
  //tìm ra sinh viên trong mảng, lấy thông tin người dùng thay đổi dán lại cho sv đó
  for (var index = 0; index < mangSinhVien.length; index++) {
    var sinhVien = mangSinhVien[index];
    if (sinhVien.maSinhVien === sinhVienUpdate.maSinhVien) {
      sinhVien.tenSinhVien = sinhVienUpdate.tenSinhVien;
      sinhVien.loaiSinhVien = sinhVienUpdate.loaiSinhVien;
      sinhVien.diemRenLuyen = sinhVienUpdate.diemRenLuyen;
      sinhVien.email = sinhVienUpdate.email;
      sinhVien.soDienThoai = sinhVienUpdate.soDienThoai;
      sinhVien.diemToan = sinhVienUpdate.diemToan;
      sinhVien.diemLy = sinhVienUpdate.diemLy;
      sinhVien.diemHoa = sinhVienUpdate.diemHoa;
    }
  }
  renderTableSinhVien(mangSinhVien);
};

document.querySelector("#btnTimKiem").onclick = function () {
  var tuKhoa = document.querySelector("#tuKhoa").value;
  //.trim(): loại bỏ khoảng trắng đầu và cuối chuỗi
  //.toLowerCase(): biến đổi tất cả các chữ cái in hoa thành chữ thường
  //.toUpperCase(): biến đổi tất cả các chữ cái thường thành chữ in hoa
  tuKhoa = tuKhoa.trim().toLowerCase();
  //output: 1 mảng sinh viên tên có chứa từ khóa
  var mangSVTimKiem = [];
  for (var index = 0; index < mangSinhVien.length; index++) {
    var sinhVien = mangSinhVien[index];
    if (sinhVien.tenSinhVien.trim().toLowerCase().search(tuKhoa) !== -1) {
      mangSVTimKiem.push(sinhVien);
    }
  }
  renderTableSinhVien(mangSVTimKiem);
  luuSinhVienStorage();
};

//Viết hàm từ 1 mảng sinh viên mangSinhVien
function renderTableSinhVien(mangSinhVien) {
  var sHTML = "";
  for (var index = 0; index < mangSinhVien.length; index++) {
    var sinhVien = mangSinhVien[index];
    sHTML += `
    <tr>
        <td>${sinhVien.maSinhVien}</td>
        <td>${sinhVien.tenSinhVien}</td>
        <td>${sinhVien.email}</td>
        <td>${sinhVien.soDienThoai}</td>
        <td>${sinhVien.loaiSinhVien}</td>
        <td>
            <button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')"> Xóa</button>
            <button class="btn btn-primary ml-2" onclick="suaSinhVien('${sinhVien.maSinhVien}')" > Chỉnh sửa</button>
        </td>
    </tr>
    `;
    console.log(sHTML);
  }
  //ra khỏi vòng lặp for dom đến thẻ tbody đưa html vào
  document.querySelector("#tblSinhVien").innerHTML = sHTML;
}

function xoaSinhVien(maSVClick) {
  for (var index = mangSinhVien.length - 1; index >= 0; index--) {
    var sv = mangSinhVien[index];
    if (sv.maSinhVien === maSVClick) {
      mangSinhVien.splice(index, 1);
    }
  }
  renderTableSinhVien(mangSinhVien);
  luuSinhVienStorage();
}

function suaSinhVien(maSVClick) {
  console.log(maSVClick);
  //Duyệt mảng tìm ra sinh Viên bấm nút sửa
  for (var index = 0; index < mangSinhVien.length; index++) {
    //Mỗi lần duyệt lấy ra 1 object kiểm tra mã sv
    var sinhVien = mangSinhVien[index];
    if (sinhVien.maSinhVien === maSVClick) {
      //Tìm thấy => gán dữ liệu của sv đó lên các thẻ input
      document.querySelector("#maSinhVien").value = sinhVien.maSinhVien;
      document.querySelector("#tenSinhVien").value = sinhVien.tenSinhVien;
      document.querySelector("#loaiSinhVien").value = sinhVien.loaiSinhVien;
      document.querySelector("#diemRenLuyen").value = sinhVien.diemRenLuyen;
      document.querySelector("#email").value = sinhVien.email;
      document.querySelector("#soDienThoai").value = sinhVien.soDienThoai;
      document.querySelector("#diemToan").value = sinhVien.diemToan;
      document.querySelector("#diemLy").value = sinhVien.diemLy;
      document.querySelector("#diemHoa").value = sinhVien.diemHoa;
    }
  }
}

//Lưu sinh viên vào localstorage
function luuSinhVienStorage() {
  //Chuyển Mảng về chuỗi => lưu vào localstorage
  var sMangSinhVien = JSON.stringify(mangSinhVien);
  //lưu localstorage
  localStorage.setItem("mangSinhVien", sMangSinhVien);
}

//lấy localstorage
function laySinhVienStorage() {
  //kiểm tra xem có storage đó ko
  if (localStorage.getItem("mangSinhVien")) {
    var sMaSinhVien = localStorage.getItem("mangSinhVien");
    mangSinhVien = JSON.parse(sMaSinhVien);

    //từ mang tạo ra table
    renderTableSinhVien(mangSinhVien);
  }
}
// Gọi hàm lấy localstorage khi giao diện vừa load
laySinhVienStorage();

//tạo ra thẻ tr
//   //.createElement(): Tạo ra 1 thẻ
//   var trSinhVien = document.createElement("tr");

//   //tạo ra thẻ td nội dung
//   var tdMaSinhVien = document.createElement("td");
//   tdMaSinhVien.innerHTML = sinhVien.maSinhVien;
//   var tdTenSinhVien = document.createElement("td");
//   tdTenSinhVien.innerHTML = sinhVien.tenSinhVien;
//   var tdEmail = document.createElement("td");
//   tdEmail.innerHTML = sinhVien.email;
//   var tdSDT = document.createElement("td");
//   tdSDT.innerHTML = sinhVien.soDienThoai;
//   var tdLoaiSinhVien = document.createElement("td");
//   tdLoaiSinhVien.innerHTML = sinhVien.loaiSinhVien;
//   //tạo trường chức năng
//   var tdXoaSinhVien = document.createElement("td");
//   var btnXoa = document.createElement("button");
//   btnXoa.innerHTML = "Xóa";
//   btnXoa.className = "btn btn-danger";
//   btnXoa.onclick = function () {
//     // trSinhVien.remove();
//     //.parentElement là dom đến thẻ cha của thẻ đang xử lý
//     // btnXoa.parentElement.parentElement.remove()
//     //.closest(selector): dom đến thẻ chứa selector gần nhất chứa thẻ đang xử lý;
//     btnXoa.closest("tr").remove();
//   };

//   tdXoaSinhVien.appendChild(btnXoa);

//   //.appendChile(the_con): đưa 1 thẻ con vào thẻ cha
//   trSinhVien.appendChild(tdMaSinhVien);
//   trSinhVien.appendChild(tdTenSinhVien);
//   trSinhVien.appendChild(tdEmail);
//   trSinhVien.appendChild(tdSDT);
//   trSinhVien.appendChild(tdLoaiSinhVien);
//   trSinhVien.appendChild(tdXoaSinhVien);

//   //Đưa thẻ tr lên thẻ tbody
//   document.querySelector("#tblSinhVien").appendChild(trSinhVien);
