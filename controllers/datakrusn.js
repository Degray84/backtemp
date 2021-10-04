const ExcelJS = require("exceljs");

exports.getOrdersDB = async function(req, res, next) {
  try {
    const orders = [];
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("ОКРУСН_КСО_заказы.xlsx");
    workbook.getWorksheet("Заказы").eachRow((row, index_row) => {
      const r = [];
      row.eachCell({ includeEmpty: true },(cell, index_cell) => {
        //   if (index_cell != 0) {
        if (cell.formula) {
          if (cell.result) {
            r.push(cell.result);
          } else {
            r.push(null);
          }
        } else {
          r.push(cell.value);
        }
        //   }
      });
      orders.push(r);
    });
    res.send({
      success: true,
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};
