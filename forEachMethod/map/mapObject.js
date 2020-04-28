const  persons = [
        {firstname : "Malcom", lastname: "Reynolds"},
        {firstname : "Kaylee", lastname: "Frye"},
        {firstname : "Jayne", lastname: "Cobb"}
      ];

      const getFullName = persons.map(item=>{
              const fullName = [item.firstname,item.lastname].join(" ");
              return fullName;
      });
      console.log(getFullName);

let kvArray = [{key: 1, value: 10}, 
        {key: 2, value: 20}, 
        {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
let rObj = {}
rObj[obj.key] = obj.value
return rObj
})
console.log(reformattedArray);