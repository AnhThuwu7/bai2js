function confirmLienHe(event) {
    event.preventDefault();
    let go = confirm("Bạn có chắc chắn muốn đến trang Liên hệ?");
    if (go) {
        window.location.href = "Lienhe.html";
    }
}