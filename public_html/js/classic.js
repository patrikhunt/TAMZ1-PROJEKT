

function tlacitka()
{
    $("#jedna_tlacitko").click(function()
    {
        $('#vysledek').val($('#vysledek').val() + "1");
        
    });
   
    $("#dva_tlacitko").click(function()
    {
        $('#vysledek').val($('#vysledek').val() + "2");
    });
    
    $("#tri_tlacitko").click(function()
    {
        $('#vysledek').val($('#vysledek').val() + "3");
    });
    
    $("#ctyri_tlacitko").click(function()
    {
        $('#vysledek').val($('#vysledek').val() + "4");
    });
    
    $("#pet_tlacitko").click(function()
    {
        $('#vysledek').val($('#vysledek').val() + "5");
    });
    
    $("#sest_tlacitko").click(function()
    {
        $('#vysledek').val($('#vysledek').val() + "6");
    });
    
    $("#sedm_tlacitko").click(function()
    {
        $('#vysledek').val($('#vysledek').val() + "7");
    });
    
    $("#osm_tlacitko").click(function()
    {
        $('#vysledek').val($('#vysledek').val() + "8");
    });
    
    $("#devet_tlacitko").click(function()
    {
        $('#vysledek').val($('#vysledek').val() + "9");
    });
    
    $("#plus").click(function()
    {
        $('#vysledek').val($('#vysledek').val() + "+");
    });
    
    $("#minus").click(function()
    {
        $('#vysledek').val($('#vysledek').val() + "-");
    });
    
    $("#nasobeni").click(function()
    {
        $('#vysledek').val($('#vysledek').val() + "*");
    });
    
    
    $("#deleni_tlacitko").click(function()
    {
        $('#vysledek').val($('#vysledek').val() + "/");
    });
    
    
    
    
    // Event handler pro vyhodnoceni zadanych hodnot
    $('#vypocitat').click(function()
    {
        var vyhodnoceni = $('#vysledek').val();
        vyhodnoceni = eval(vyhodnoceni);
        $('#vysledek').val(vyhodnoceni.toString());
        
    });
    
    // Event handler pro vyresetování ziskaného výsledku
    $('#reset_tlacitko').click(function()
    {
       $('#vysledek').val("");
    });
    
}

$(document).ready(function(){
    
    tlacitka(); // Zavolání funkce pro aktivování interakce mezi tlačítky
    
    
    
    
    
    
    
   
});
