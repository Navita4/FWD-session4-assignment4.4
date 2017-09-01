var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// create class Decorator with parameter
function MyClassDecorator(target) {
    console.log("..class Decorator..");
}
function MyClassDecoratorParam(param1, param2) {
    return function (target) {
        console.log("ClassDecoratorParam(" + param1 + " " + param2 + " called on:", target);
    };
}
var MyClassDecoratorExercise = (function () {
    function MyClassDecoratorExercise() {
    }
    MyClassDecoratorExercise = __decorate([
        MyClassDecorator
    ], MyClassDecoratorExercise);
    return MyClassDecoratorExercise;
}());
var MyClassDecoratorParamExercise = (function () {
    function MyClassDecoratorParamExercise() {
    }
    MyClassDecoratorParamExercise = __decorate([
        MyClassDecoratorParam(4, "ss")
    ], MyClassDecoratorParamExercise);
    return MyClassDecoratorParamExercise;
}());
