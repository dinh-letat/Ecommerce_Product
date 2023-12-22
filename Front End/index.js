var soLuong = 0;
var totalProduct;
function hienThiSoLuong(){
    document.getElementById("quantity-cart").textContent = soLuong;
}
function tongSoLuongSanPham(){
    document.getElementById("totalProduct").textContent = totalProduct;
}
function minusCart(){
    if(soLuong > 0){
        soLuong--;
        hienThiSoLuong();
    }
}
function plusCart(){
    soLuong++;
    hienThiSoLuong();
}
function totalProduct(){
    // totalProduct = soLuong * donGia;
    // tongSoLuongSanPham();
    totalProduct.textContent
}