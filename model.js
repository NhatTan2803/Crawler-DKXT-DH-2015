'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/diemthi_dh');

var thisinh = mongoose.model('thisinh', {
	ho_ten: String, // Ho va ten
	so_bao_danh: { type: String, unique: true, index: true }, // So bao danh
	ma_truong: String, // Ma~ truo`ng
	ma_nganh: String, // Nga`nh 
	uu_tien_nguyen_vong: { type: Number, default: 0 }, // So thu tu nguyen vong uu tien
	diem_1 : { type: Number, default: 0 }, // Diem mon 1
	diem_2 : { type: Number, default: 0 }, // Diem mon 2
	diem_3 : { type: Number, default: 0 }, // Diem mon 3
	diem_uu_tien: { type: Number, default: 0 }, // Diem uu tien
	tong_diem : { type: Number, default: 0 }, // Tong so diem
});

module.exports = thisinh;