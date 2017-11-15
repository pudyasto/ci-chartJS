/* 
 * ***************************************************************
 * Script : 
 * Version : 
 * Date :
 * Author : Pudyasto Adi W.
 * Email : mr.pudyasto@gmail.com
 * Description : 
 * ***************************************************************
 */


// load a locale
numeral.register('locale', 'id', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'Rp.' : '-';
    },
    currency: {
        symbol: 'Rp.'
    }
});

// switch between locales
numeral.locale('id');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomColorRGB() {
    var code1 = Math.floor(Math.random() * 256);
    var code2 = Math.floor(Math.random() * 256);
    var code3 = Math.floor(Math.random() * 256);
    var color = 'rgb('+code1+','+code2+','+code3+')';
    return color;
}

var bulan = ["Nama Bulan","Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
var bulan_short = ["Nama Bulan","Jan","Feb","Mar","Apr","Mei","Juni","Juli","Agt","Sept","Okt","Nov","Des"];