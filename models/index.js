const models ={
    usersModel: require('./noSql/users'),
    storageModel: require('./noSql/storage'),   
    type_identificationsModel: require('./noSql/type_identifications'),
    type_salarysModel: require('./noSql/type_salarys'),
    gendersModel: require('./noSql/genders'),  
    type_activitysModel: require('./noSql/type_activitys'),  
    type_jobsModel: require('./noSql/type_jobs'),  
    type_contractsModel: require('./noSql/type_contracts'),    
    departmentsModel: require('./noSql/departments'),    
    marital_statesModel: require('./noSql/marital_states'), 
    nationalitysModel: require('./noSql/nationalitys'),  
    municipialitysModel: require('./noSql/municipialitys'), 
    load_massivesModel: require('./noSql/load_massives'),  








}

module.exports = models