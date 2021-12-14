const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:22}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:21}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:21},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:21}]

 
 const averageAge = (array) => {
    const sum = array.reduce((a,b) => a + b.age, 0);
    return Math.floor(sum/ array.length);
};


 const bananaBread = array => {
     return array.map(alum => {
         return {...alum, bananaBread : `${alum.name} got banana bread at ${alum.job}` };
     });
 };

const ninetiesBabies =(alumni)=> alumni.filter(c => c.age > 21);

console.log(ninetiesBabies(alumni));

const addSchool = array => {
    return array.map(alum => {
        return {... alum, school : "The Marcy Lab School"};
    });
};


const allUseJavaScript = array => {
    return array.every(obj => {
        return obj.language === "JavaScript";
    });
};

console.log(allUseJavaScript(alumni))