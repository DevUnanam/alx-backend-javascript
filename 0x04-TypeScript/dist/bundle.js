/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var s1 = {
    firstName: "Martins",
    lastName: "Ndifon",
    age: 30,
    location: "Abuja",
};
var s2 = {
    firstName: "Charlian",
    lastName: "Imoisili",
    age: 25,
    location: "Lagos",
};
var studentsList = [s1, s2];
// Create the table element
var table = document.createElement('table');
table.id = 'studentsTable';
// Create the table header
var tableHead = document.createElement('thead');
var headerRow = document.createElement('tr');
var firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
var locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
tableHead.appendChild(headerRow);
// Create the table body
var tableBody = document.createElement('tbody');
// Append the table elements to the body
table.appendChild(tableHead);
table.appendChild(tableBody);
// Append the table to the body tag
document.body.appendChild(table);
var atableBody = document.querySelector('#studentsTable tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    atableBody.appendChild(row);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBT0EsSUFBTSxFQUFFLEdBQVk7SUFDbkIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsT0FBTztDQUNqQixDQUFDO0FBRUYsSUFBTSxFQUFFLEdBQVk7SUFDbkIsU0FBUyxFQUFFLFVBQVU7SUFDckIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsT0FBTztDQUNqQixDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQWMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFekMsMkJBQTJCO0FBQzNCLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxlQUFlLENBQUM7QUFFM0IsMEJBQTBCO0FBQzFCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEQsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQyxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JELGVBQWUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO0FBQzNDLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEQsY0FBYyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7QUFFeEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN2QyxTQUFTLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFakMsd0JBQXdCO0FBQ3hCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbEQsd0NBQXdDO0FBQ3hDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDN0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUU3QixtQ0FBbUM7QUFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFakMsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRWxFLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO0lBQzNCLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxhQUFhLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDOUMsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxZQUFZLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFFNUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvQixHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFN0dWRlbnQge1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0YWdlOiBudW1iZXI7XG5cdGxvY2F0aW9uOiBzdHJpbmc7XG59XG5cbmNvbnN0IHMxOiBTdHVkZW50ID0ge1xuXHRmaXJzdE5hbWU6IFwiTWFydGluc1wiLFxuXHRsYXN0TmFtZTogXCJOZGlmb25cIixcblx0YWdlOiAzMCxcblx0bG9jYXRpb246IFwiQWJ1amFcIixcbn07XG5cbmNvbnN0IHMyOiBTdHVkZW50ID0ge1xuXHRmaXJzdE5hbWU6IFwiQ2hhcmxpYW5cIixcblx0bGFzdE5hbWU6IFwiSW1vaXNpbGlcIixcblx0YWdlOiAyNSxcblx0bG9jYXRpb246IFwiTGFnb3NcIixcbn07XG5cbmNvbnN0IHN0dWRlbnRzTGlzdDogU3R1ZGVudFtdID0gW3MxLCBzMl07XG5cbi8vIENyZWF0ZSB0aGUgdGFibGUgZWxlbWVudFxuY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xudGFibGUuaWQgPSAnc3R1ZGVudHNUYWJsZSc7XG5cbi8vIENyZWF0ZSB0aGUgdGFibGUgaGVhZGVyXG5jb25zdCB0YWJsZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuY29uc3QgaGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbmNvbnN0IGZpcnN0TmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5maXJzdE5hbWVIZWFkZXIudGV4dENvbnRlbnQgPSAnRmlyc3QgTmFtZSc7XG5jb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG5sb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG5cbmhlYWRlclJvdy5hcHBlbmRDaGlsZChmaXJzdE5hbWVIZWFkZXIpO1xuaGVhZGVyUm93LmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGVyKTtcbnRhYmxlSGVhZC5hcHBlbmRDaGlsZChoZWFkZXJSb3cpO1xuXG4vLyBDcmVhdGUgdGhlIHRhYmxlIGJvZHlcbmNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG5cbi8vIEFwcGVuZCB0aGUgdGFibGUgZWxlbWVudHMgdG8gdGhlIGJvZHlcbnRhYmxlLmFwcGVuZENoaWxkKHRhYmxlSGVhZCk7XG50YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUJvZHkpO1xuXG4vLyBBcHBlbmQgdGhlIHRhYmxlIHRvIHRoZSBib2R5IHRhZ1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbmNvbnN0IGF0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3R1ZGVudHNUYWJsZSB0Ym9keScpO1xuXG5zdHVkZW50c0xpc3QuZm9yRWFjaCgoc3R1ZGVudCkgPT4ge1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBjb25zdCBmaXJzdE5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgZmlyc3ROYW1lQ2VsbC50ZXh0Q29udGVudCA9IHN0dWRlbnQuZmlyc3ROYW1lO1xuICBjb25zdCBsb2NhdGlvbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBsb2NhdGlvbkNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmxvY2F0aW9uO1xuXG4gIHJvdy5hcHBlbmRDaGlsZChmaXJzdE5hbWVDZWxsKTtcbiAgcm93LmFwcGVuZENoaWxkKGxvY2F0aW9uQ2VsbCk7XG4gIGF0YWJsZUJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
