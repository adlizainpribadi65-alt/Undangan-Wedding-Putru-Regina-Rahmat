// =====================================================================
// KODE GOOGLE APPS SCRIPT UNTUK BUKU TAMU & RSVP ROHMAT & REGINA
// =====================================================================
// Cara Pasang:
// 1. Buka https://sheets.new di browser (Google Spreadsheet baru)
// 2. Beri nama file: "Buku Tamu Rohmat & Regina"
// 3. Pada baris ke-1, buat judul kolom:
//    - Kolom A: Timestamp
//    - Kolom B: Nama
//    - Kolom C: Kehadiran
//    - Kolom D: Jumlah Tamu
//    - Kolom E: Doa & Ucapan
// 4. Klik menu: Ekstensi > Apps Script
// 5. Hapus semua teks yang ada, tempel seluruh kode di bawah ini:

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var timestamp = (e && e.parameter && e.parameter.timestamp) ? e.parameter.timestamp : Utilities.formatDate(new Date(), "Asia/Jakarta", "dd/MM/yyyy HH:mm:ss");
    var nama = (e && e.parameter && e.parameter.nama) ? e.parameter.nama : '';
    var kehadiran = (e && e.parameter && e.parameter.kehadiran) ? e.parameter.kehadiran : '';
    var jumlah = (e && e.parameter && e.parameter.jumlah) ? e.parameter.jumlah : '0';
    var ucapan = (e && e.parameter && e.parameter.ucapan) ? e.parameter.ucapan : '';

    // Tambahkan baris baru ke Google Sheet
    sheet.appendRow([timestamp, nama, kehadiran, jumlah, ucapan]);

    return ContentService
      .createTextOutput(JSON.stringify({ "status": "success", "message": "Data berhasil disimpan" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 6. Klik tombol "Terapkan" (Deploy) > "Penerapan baru" (New Deployment)
//    - Pilih jenis: "Aplikasi web" (Web app)
//    - Siapa yang memiliki akses (Who has access): Pilih "Siapa saja" (Anyone) -> PENTING!
//    - Klik "Terapkan" (Deploy)
// 7. Salin URL yang berakhiran /exec
// 8. Tempelkan URL tersebut ke index.html pada baris:
//    const GOOGLE_SHEET_URL = "URL_ANDA_DI_SINI";

