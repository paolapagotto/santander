const { response } = require('express');
const apiSantander = require('../config/apisantander')

module.exports = {
    async getCourses(){

        let courses = await apiSantander.find()

        let hits = [];
        //console.log(hits)
        for (let index = 1; index <= courses.data.totalPages; index++) {
            var newCourses = await apiSantander.find(index)
            //console.log(newCourses)
            hits.push.apply(hits, newCourses.data.hits);
  
            
        }
        return hits;
    }
    //sudo lsof -t -i tcp:3000 | xargs kill


    
}