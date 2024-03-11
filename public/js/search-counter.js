$(document).ready(function () {
    updateCount();
});

function updateCount() {
    $.post("/inc/modules/search/search-counter.aspx?"
    + "&COGManufacturer=" + checkControl($("#MakeField_DD option:selected"))
    + "&COGModel=" + checkControl($("#ModelField_DD option:selected"))
    + "&COGPriceFrom=" + checkControl($("#MinPrice_DD option:selected"))
    + "&COGPriceTo=" + checkControl($("#MaxPrice_DD option:selected"))
    + "&COGFinancePriceFrom=" + checkControl($("#FinanceMinRegularPayment_DD option:selected"))
    + "&COGFinancePriceTo=" + checkControl($("#FinanceMaxRegularPayment_DD option:selected"))
    + "&COGEnabled=1",
    function (data) {
        var content = $($.parseHTML(data)).find("#count").text().replace(/(\r\n|\n|\r)/gm, '');
        $('#counter').html(content);
        $('#SearchButton_COGCustomSearchButton').val('Search ' + content + ' Vehicles');
    });
}

function checkControl(Control) {
    if (Control.val() !== undefined) {
        return Control.val();
    } else {
        return "-1";
    }
}


  // Remove attribute on window resize
  function setFilterOPenOrClosed() {
    if ($(window).width() > 991) {
      $('#resultsFilter').attr('open', '')

    }
  }
  window.addEventListener('load', setFilterOPenOrClosed)
  window.addEventListener('resize', setFilterOPenOrClosed)

  

  $(function () {
        $("#reset").bind("click", function () {
            $("#MakeField_DD")[0].selectedIndex = 0;
            $("#ModelField_DD")[0].selectedIndex = 0;
            $("#MinPrice_DD")[0].selectedIndex = 0;
            $("#MaxPrice_DD")[0].selectedIndex = 0;
            $("#RegYearFrom_DD")[0].selectedIndex = 0;
            $("#RegYearTo_DD")[0].selectedIndex = 0;
            $("#MinMileageField_DD")[0].selectedIndex = 0;
            $("#MaxMileageField_DD")[0].selectedIndex = 0;
            $("#TransmissionField_DD")[0].selectedIndex = 0;
            $("#FuelField_DD")[0].selectedIndex = 0;
        });
    });

