$(document).ready(function () {

    $(".radio-btn").click(function () {
        $(".radio-inner").toggleClass("active");
        $("body").toggleClass("dark");
    });

    $('.buttonHide').click(function () {

        $('#gambar1').toggle()
        const tombol = $(this).text()

        if (tombol == 'Hide') {
            $(this).text('Show')
        }

        if (tombol == 'Show') {
            $(this).text('Hide')
        }
        console.log($(this).text())
    })


    $('.buttonNext').click(function () {
        const gambar = $('#gambar1').attr('src');
        const split = gambar.split('/')[5]
        const nomor = parseInt(split.substring(0, split.indexOf('.'))) + 1

        if (nomor <= 21) {
            const url = '../../img/image_juz/juz1/' + nomor + '.png'
            $('#gambar1').attr('src', url);
        }
    })

    $('.buttonBack').click(function () {
        const gambar = $('#gambar1').attr('src');
        const split = gambar.split('/')[5]
        const nomor = parseInt(split.substring(0, split.indexOf('.'))) - 1

        if (nomor >= 1) {
            const url = '../../img/image_juz/juz1/' + nomor + '.png'
            $('#gambar1').attr('src', url);
        }


    })
});