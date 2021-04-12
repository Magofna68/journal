import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Journal, Entry } from "./journal";

let myJournal = new Journal();

$("form").submit(function (event) {
  event.preventDefault();
  const title = $("#title").val();
  const body = $("#body").val();

  const myEntry = new Entry(title, body);
  myJournal.addEntry(myEntry);
  console.log(myJournal);

  let html = `<div class="container">`;
  myJournal.entries.forEach((arrayElement) => {
    html += `<div class="card entry"><h2>${arrayElement.title}</h2><p>${arrayElement.body}</p></div>`;
  });
  html += "</div>";
  $(".entries").html(html);
});
