function result() {
  var students = {
    //DaviD

    DAVID: {
      Math: "95",
      Physics: "100",
      Literature: "88",
    },
    SHAWN: {
      Math: "95",
      Physics: "100",
      Literature: "88",
    },
    BELLA: {
      Math: "95",
      Physics: "100",
      Literature: "88",
    },
  };

  var studentname = document.getElementById("studentname").value;
  var input = studentname.toUpperCase();
  var definition = students[input];
  var output = document.getElementById("output");

  if (definition == undefined) {
    output.innerHTML = `<hr> There is no information about this student. <hr>`;
  } else {
    output.innerHTML = `<hr> Math score is ${definition.Math}. <hr> Physics score is ${definition.Physics}. <hr> Literature score is ${definition.Literature}.<hr>`;
  }
}
