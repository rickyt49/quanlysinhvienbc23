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

function getApiSinhVien() {
  var promise = axios({
    url: "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
    method: "GET",
  });

  //Thành công
  promise.then(function (result) {
    console.log("result", result.data);
    //Sau khi lấy dữ liệu từ backend, => gọi hàm để từ dữ liệu xuất lên web
    renderTableSinhVien(result.data);
  });

  //Thất bại
  promise.catch(function (error) {
    console.log(error);
  });
}
//Gọi hàm khi vừa load web

getApiSinhVien();

document.querySelector("#btnXacNhan").onclick = function () {
  //Lấy thông tin người dùng nhập vào => chứa trong format object backend yêu cầu
  var sv = new SinhVien();
  sv.maSinhVien = document.querySelector("#maSinhVien").value;
  sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
  sv.diemToan = document.querySelector("#diemToan").value;
  sv.diemLy = document.querySelector("#diemLy").value;
  sv.diemHoa = document.querySelector("#diemHoa").value;
  sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sv.email = document.querySelector("#email").value;
  sv.soDienThoai = document.querySelector("#soDienThoai").value;
  console.log("sv", sv);

  //Dùng axios gửi dữ liệu lên backend

  var promise = axios({
    url: "http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien",
    method: "POST",
    data: sv, //Phải đúng định dạng
  });

  //Thành công
  promise.then(function (result) {
    console.log("result", result.data);
    getApiSinhVien();
  });
  //Thất bại
  promise.catch(function (error) {
    console.log("error", error);
  });
};

function xoaSinhVien(maSVClick) {
  var promise = axios({
    url:
      "http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=" +
      maSVClick,
    method: "DELETE",
  });
  promise.then(function (result) {
    console.log("result", result.data);
    getApiSinhVien();
  });

  promise.catch(function (error) {
    console.log("error", error);
  });
}

function suaSinhVien(maSVClick) {
  var promise = axios({
    url:
      "http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=" +
      maSVClick,
    method: "GET",
  });

  promise.then(function (result) {
    //lấy thông tin sinh viên gán lên các thẻ input
    var sinhVien = result.data;
    document.querySelector("#maSinhVien").value = sinhVien.maSinhVien;
    document.querySelector("#tenSinhVien").value = sinhVien.tenSinhVien;
    document.querySelector("#loaiSinhVien").value = sinhVien.loaiSinhVien;
    document.querySelector("#diemRenLuyen").value = sinhVien.diemRenLuyen;
    document.querySelector("#diemToan").value = sinhVien.diemToan;
    document.querySelector("#diemLy").value = sinhVien.diemLy;
    document.querySelector("#diemHoa").value = sinhVien.diemHoa;
    document.querySelector("#email").value = sinhVien.email;
    document.querySelector("#soDienThoai").value = sinhVien.soDienThoai;
  });

  promise.catch(function (error) {
    console.log("error", error);
  });
}

document.querySelector("#btnCapNhat").onclick = function () {
  //Lấy thông tin người dùng sau khi thay đổi
  var sinhVienUpdate = new SinhVien();
  sinhVienUpdate.maSinhVien = document.querySelector("#maSinhVien").value;
  sinhVienUpdate.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sinhVienUpdate.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sinhVienUpdate.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
  sinhVienUpdate.diemToan = document.querySelector("#diemToan").value;
  sinhVienUpdate.diemLy = document.querySelector("#diemLy").value;
  sinhVienUpdate.diemHoa = document.querySelector("#diemHoa").value;
  sinhVienUpdate.email = document.querySelector("#email").value;
  sinhVienUpdate.soDienThoai = document.querySelector("#soDienThoai").value;

  var promise = axios({
    url:
      "http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=" +
      sinhVienUpdate.maSinhVien,
    method: "PUT",
    data: sinhVienUpdate,
  });

  promise.then(function (result) {
    console.log("result", result);
    getApiSinhVien();
  });

  promise.catch(function (error) {
    console.log("error", error);
  });
};

//Callback function: là function đóng vai trò là tham số truyền vào function khác

function main(callback) {
  callback("Cybersoft");
}

function renderH3(content) {
  document.querySelector("#content").innerHTML = "<h3>" + content + "</h3>";
}

main(renderH3);
