export default {
    format : function(number) {
        return isNaN(number)? "" : number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")
      }
}