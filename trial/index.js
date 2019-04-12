const tugasAkoeh = [["mandi", "sarapan"], "minum", "belajar", "mabok"];

console.log(tugasAkoeh[0][1], tugasAkoeh[3]);

const tugasKamoeh = {
  id: 1,
  name: "pekerjaan rumah",
  job: "submit laporan ke pak bos"
};

console.log(tugasKamoeh.job, tugasKamoeh.name);

// // --------------------------------------------------------

const bisaJava = [
  {
    objective: "loop",
    status: "not skilled",
    progress: 5
  },
  {
    objective: "comparison",
    status: "not skilled",
    progress: 6
  }
];

for (let index = 0; index <= bisaJava.length; index++) {
  console.log(bisaJava[index]);
}

// --------------------------------------------------------
// 1. Ngambil input dari user
const input1 = prompt("What's your objective?");
const input2 = prompt("How is it going, I mean..the status?");
const input3 = parseInt(prompt("How about the progress?"));

/* 
  2. Jadikan input dari user sebagai parameter di fungsi newObjectSkill()
  objectiveParam = input1,
  statusParam = input2,
  progressParams = input3
*/

const newObjectSkill = (objectiveParam, statusParam, progressParam) => {
  let newObject = {
    objective: objectiveParam,
    status: statusParam,
    progress: progressParam
  };

  return newObject;
};

// console.log(newObjectSkill(input1, input2, input3));

/* 
3. masukkan objek baru ke dalam bisaJava cuk!
*/

const addedNewObject = param => {
  bisaJava.push(param);

  return bisaJava;
};

console.log(addedNewObject(newObjectSkill(input1, input2, input3)));

// delete Object

const deleteObject = bisaJava.slice(0, 2);

console.log(deleteObject);
