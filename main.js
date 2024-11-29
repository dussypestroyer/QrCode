// const generateQRCode = (text, canvasId) => {
//     const canvas = document.getElementById(canvasId);
//     if (!canvas) {
//         console.error("Canvas element not found!");
//         return;
//     }

//     // Убедитесь, что QRCode библиотека подключена
//     if (typeof QRCode === 'undefined') {
//         console.error("QRCode library is not loaded!");
//         return;
//     }

//     // Параметры для генерации QR-кода
//     const options = {
//         text: text,            // Текст, который нужно зашифровать
//         width: 256,            // Ширина QR-кода
//         height: 256,           // Высота QR-кода
//         colorDark: "#000000", // Цвет квадратов
//         colorLight: "#ffffff", // Цвет фона
//         correctLevel: QRCode.CorrectLevel.H // Уровень коррекции ошибок
//     };

//     // Создаем новый QR-код
//     const qrCode = new QRCode(canvas, options);
// };

// // Вызов функции для создания QR-кода
// // Пример: Текст "Привет, мир!" и канвас с ID "qrCanvas"
// generateQRCode("Привет, мир!", "qrCanvas");