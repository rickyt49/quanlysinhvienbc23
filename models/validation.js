function Validation() {
  this.kiemTraRong = function (value, selectorError) {
    if (value.trim() === "") {
      document.querySelector(selectorError).innerHTML = "Không được bỏ trống";
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };
  this.kiemTraKyTu = function (value, selectorError) {
    var regexLetter =
      /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/;

    if (regexLetter.test(value)) {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
    document.querySelector(selectorError).innerHTML = "Tất cả phải là ký tự";
    return false;
  };
  this.kiemTraEmail = function (value, selectorError) {
    var regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(value)) {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
    document.querySelector(selectorError).innerHTML = "Email không hợp lệ";
    return false;
  };
  this.kiemTraSo = function (value, selectorError) {
    var regexSo = /^[0-9]+$/;
    if (regexSo.test(value)) {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
    document.querySelector(selectorError).innerHTML = "Số không hợp lệ";
    return false;
  };
  this.kiemTraDoDai = function (value, selectorError, minLength, maxLength) {
    if (value.length > maxLength || value.length < minLength) {
      document.querySelector(selectorError).innerHTML =
        "Độ dài từ " + minLength + " - " + maxLength + " ký tự.";
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };
  this.kiemTraGiaTri = function (value, selectorError, minValue, maxValue) {
    if (value > maxValue || value < minValue) {
      document.querySelector(selectorError).innerHTML =
        "Giá trị từ " + minValue + " - " + maxValue;
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    return true;
  };
  this.kiemTraDevB = function () {
    console.log("testing");
  };
  this.kiemTraDevA = function () {
    console.log("Check Dev A");
  };
  this.kiemtraDevC = function () {
    console.log("123");
  };
}
