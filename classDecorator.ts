// create class Decorator with parameter
function MyClassDecorator(target){
console.log("..class Decorator..");
}
function MyClassDecoratorParam(param1:number , param2:string){
    return function(target){
        console.log("ClassDecoratorParam("+param1+" "+param2+" called on:",target);
    }
}
@MyClassDecorator
class MyClassDecoratorExercise{
    
}
@MyClassDecoratorParam(4,"ss")
class MyClassDecoratorParamExercise{

}