function UP() {
  if (SpreadsheetApp.getActiveSheet().getRange('H5').getValue() == SpreadsheetApp.getActiveSheet().getRange('F17').getValue()) {
    SpreadsheetApp.getActiveSheet().getRange('B14').setValue(SpreadsheetApp.getActiveSheet().getRange('B14').getValue() - 1);
  }
}
function DOWN() {
  if (SpreadsheetApp.getActiveSheet().getRange('H7').getValue() == SpreadsheetApp.getActiveSheet().getRange('F17').getValue()) {
    SpreadsheetApp.getActiveSheet().getRange('B14').setValue(SpreadsheetApp.getActiveSheet().getRange('B14').getValue() + 1);
  }
}
function LEFT() {
  if (SpreadsheetApp.getActiveSheet().getRange('G6').getValue() == SpreadsheetApp.getActiveSheet().getRange('F17').getValue()) {
    SpreadsheetApp.getActiveSheet().getRange('B13').setValue(SpreadsheetApp.getActiveSheet().getRange('B13').getValue() - 1);
  }
}
function RIGHT() {
  if (SpreadsheetApp.getActiveSheet().getRange('I6').getValue() == SpreadsheetApp.getActiveSheet().getRange('F17').getValue()) {
    SpreadsheetApp.getActiveSheet().getRange('B13').setValue(SpreadsheetApp.getActiveSheet().getRange('B13').getValue() + 1);
  }
}





function UP4() {
    SpreadsheetApp.getActiveSheet().getRange('B33').setValue(SpreadsheetApp.getActiveSheet().getRange('B33').getValue() - 1);
}
function DOWN4() {
    SpreadsheetApp.getActiveSheet().getRange('B33').setValue(SpreadsheetApp.getActiveSheet().getRange('B33').getValue() + 1);
}
function LEFT4() {
    SpreadsheetApp.getActiveSheet().getRange('B32').setValue(SpreadsheetApp.getActiveSheet().getRange('B32').getValue() - 1);
}
function RIGHT4() {
    SpreadsheetApp.getActiveSheet().getRange('B32').setValue(SpreadsheetApp.getActiveSheet().getRange('B32').getValue() + 1);
}
