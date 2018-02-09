"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var tf1, tf2, tf3, tf4;
function navigatingTo(args) {
    var page = args.object;
    tf1 = page.getViewById("tf1");
    tf2 = page.getViewById("tf2");
    tf3 = page.getViewById("tf3");
    tf4 = page.getViewById("tf4");
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
function focusSecond(args) {
    tf2.focus();
}
exports.focusSecond = focusSecond;
function focusThird(args) {
    tf3.focus();
}
exports.focusThird = focusThird;
function focusLast(args) {
    tf4.focus();
}
exports.focusLast = focusLast;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EscURBQW9EO0FBRXBELElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBYyxDQUFDO0FBRWxDLHNCQUE2QixJQUFlO0lBRXhDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFN0IsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNoRCxDQUFDO0FBVkQsb0NBVUM7QUFFRCxxQkFBNEIsSUFBSTtJQUM1QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEIsQ0FBQztBQUZELGtDQUVDO0FBQ0Qsb0JBQTJCLElBQUk7SUFDM0IsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hCLENBQUM7QUFGRCxnQ0FFQztBQUNELG1CQUEwQixJQUFJO0lBQzFCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNoQixDQUFDO0FBRkQsOEJBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZCc7XG5pbXBvcnQgeyBIZWxsb1dvcmxkTW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5cbmxldCB0ZjEsIHRmMiwgdGYzLCB0ZjQ6IFRleHRGaWVsZDtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcblxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG5cbiAgICB0ZjEgPSBwYWdlLmdldFZpZXdCeUlkKFwidGYxXCIpO1xuICAgIHRmMiA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJ0ZjJcIik7XG4gICAgdGYzID0gcGFnZS5nZXRWaWV3QnlJZChcInRmM1wiKTtcbiAgICB0ZjQgPSBwYWdlLmdldFZpZXdCeUlkKFwidGY0XCIpO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBIZWxsb1dvcmxkTW9kZWwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzU2Vjb25kKGFyZ3MpIHtcbiAgICB0ZjIuZm9jdXMoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c1RoaXJkKGFyZ3MpIHtcbiAgICB0ZjMuZm9jdXMoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c0xhc3QoYXJncykge1xuICAgIHRmNC5mb2N1cygpO1xufSJdfQ==