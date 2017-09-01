function MethodDecorator(
    target:object, //prototype of the class
    propertyKey:string, // method name
    descriptor:TypedPropertyDescriptor<any>){

        console.log("MethodDecorator called on:",target,propertyKey,descriptor);
    }
    class MethodDecoratorExample{
        @MethodDecorator
        method(){

        }
    }