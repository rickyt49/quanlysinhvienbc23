console.log(axios);

function getDataText() {
  var promise = axios({
    url: "../data/data.txt", //đường dẫn đến file hoặc api backend cung cấp
    method: "GET", //Phương thức đọc dữ liệu được backend cung cấp
    responseType: "text", //Kiểu dữ liệu trả về của file
  });

  //Xử lý thành công
  promise.then(function (result) {
    console.log("result", result.data);
    document.querySelector("body").innerHTML =
      "<p>Họ tên: " + result.data + "</p>";
  });

  //Xử lý thất bạn
  promise.catch(function (error) {
    console.log("error", error);
  });
}
// getDataText();

function getDataXML() {
  var promise = axios({
    url: "../data/data.xml",
    method: "GET",
    responseType: "document",
  });

  //Thành công
  promise.then(function (ketQua) {
    console.log("Kết quả", ketQua.data);
    var hoTen = ketQua.data.querySelector("hoTen").innerHTML;
    document.querySelector("body").innerHTML = "Họ tên: " + hoTen;
  });

  //Thất bại
  promise.catch(function (error) {
    console.log("error", error);
  });
}

// getDataXML();

function getDataJson() {
  var promise = axios({
    url: "../data/data.json",
    method: "GET",
    //resposeType: 'json',
  });
  promise.then(function (result) {
    console.log("result", result.data);
    document.querySelector("body").innerHTML =
      "<h3>Họ tên: " + result.data.hoTen + "</h3>";
  });

  promise.catch(function (error) {
    console.log("error", error);
  });
}

getDataJson();
