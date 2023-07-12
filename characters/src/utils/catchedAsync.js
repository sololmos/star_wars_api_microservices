module.exports=(fn)=>{
    return function(req,res, next){
        fn(req,res).catch((err)=>{next(err)})
    };
}
//es lo mismo que poner asi
//module.exports=(fn)=>(req,res,next)=>fn(req,res).catch((err)=>next(err));