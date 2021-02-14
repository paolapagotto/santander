const SantanderService = require('../services/SantanderService');

module.exports ={
    
    async index(req, res, next){ 
        let openCourses = []
        try{
            let courses = await SantanderService.getCourses();
                courses.forEach(element => {
                    if (element.status == "open"){
                        console.log(element.name)
                        openCourses.push(element)
                    }
                });
                return res.status(200).json(openCourses);
        } catch (error){

            return res.status(400).json({message: 'Error ' + error.message})
        }
    }
}