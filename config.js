/*
 * Thông tin bạn tự điền cho trang web EzCursor.
 * Ô nào để trống ("") thì trang sẽ tự ẩn phần đó.
 * Ảnh (QR, ảnh trong game) đặt trong thư mục docs/images/.
 */
window.EZ_CONFIG = {
  // ---- Ủng hộ ----
  momo: {
    phone: "",            // vd: "0901234567"
    name: "DINH CHI KHANG", // tên chủ ví, vd: "NGUYEN VAN A"
    qr: "images/momo-qr.webp"
  },
  bank: {
    bank: "Vietcombank",
    account: "0381000559185",
    name: "DINH CHI KHANG",
    qr: "images/bank-qr.png"
  },
  paypal: {
    url: ""               // vd: "https://paypal.me/tencuaban"
  },

  // ---- Ảnh trong game ----
  // Thêm ảnh vào docs/images/ rồi khai báo ở đây. Chú thích có thể viết 2 thứ tiếng.
  gameShots: [
    { src: "images/game-1.webp", vi: "Giữa vòng lửa và quái đông, con trỏ vẫn dễ thấy", en: "Easy to spot among fire and crowds of monsters" },
    { src: "images/game-2.webp", vi: "Hiệu ứng phép dày đặc, con trỏ không bị chìm", en: "Heavy spell effects don't bury the cursor" },
    { src: "images/game-3.webp", vi: "Dọn quái trong Monolith of Fate, Last Epoch", en: "Clearing a Monolith of Fate echo in Last Epoch" }
  ]
};
