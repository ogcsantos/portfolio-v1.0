/* /////////////////////////////
 * SISTEMA JS ( BOTÃO - CLICK )
 //////////////////////////// */
function goTo(str, boolean) {
    if(boolean) {
        return window.open(str, "_blank");
    }
    window.location.href = str;
}



/* /////////////////////////////
 * SISTEMA JS ( VOLTAR AO TOPO )
 //////////////////////////// */
$('button.voltar_topo').on('click', function (e) {
  e.preventDefault();
  $('html,body').animate({
      scrollTop: 0
  }, 700);
});