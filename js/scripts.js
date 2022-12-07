$("#bodycolor").on("change", function () {
    $("#Foggry .cls-3").css("fill", $(this).val())
})
$("#bodystrokecolor").on("change", function () {
    $("#Foggry .cls-4, .cls-3").css("stroke", $(this).val())
})
$("#eyecolor").on("change", function () {
    $("#Foggry .cls-2").css("fill", $(this).val())
})
$("#eyestrokecolor").on("change", function () {
    $("#Foggry .cls-2").css("stroke", $(this).val())
})
$("#mouthcolor").on("change", function () {
    $("#Foggry .cls-1").css("fill", $(this).val())
})
$("#mouthstrokecolor").on("change", function () {
    $("#Foggry .cls-1").css("stroke", $(this).val())
})